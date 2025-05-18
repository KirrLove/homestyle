
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { dataService } from "../services/DataService";

const categories = [
  "Все",
  "Кухни",
  "Шкафы",
  "Стеллажи",
  "Столы",
  "Стулья",
  "Кровати",
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      console.log("Fetching products from local storage...");
      try {
        const data = await dataService.getProducts();
        
        if (!data || data.length === 0) {
          console.log("No products found");
          return [];
        }

        console.log("Products fetched successfully:", data);
        return data.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category || "Кухни", // Устанавливаем категорию по умолчанию "Кухни"
          image: product.product_images.find((img) => img.is_primary)?.image_path ||
            product.product_images[0]?.image_path ||
            "/placeholder.svg",
        }));
      } catch (error) {
        console.error("Error in products query:", error);
        toast.error("Ошибка при загрузке товаров");
        throw error;
      }
    },
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Все" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 animate-fade-in">
      <div className="container">
        <SectionTitle
          title="Каталог мебели"
          subtitle="Широкий выбор мебели для вашего дома"
        />

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Поиск по каталогу"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-white"
                      : "bg-secondary text-primary hover:bg-accent/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-lg text-red-500">
              Произошла ошибка при загрузке товаров. Пожалуйста, попробуйте позже.
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Загрузка товаров...</p>
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        )}

        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              По вашему запросу ничего не найдено
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
