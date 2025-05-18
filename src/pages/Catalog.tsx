import { useState, useEffect } from "react";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";
import { Search } from "lucide-react";
import { toast } from "sonner";

const categories = [
  "Все",
  "Кухни",
  "Шкафы",
  "Стеллажи",
  "Столы",
  "Стулья",
  "Кровати",
];

// Product images mapping
const productImagesMap = [
  // Кухня 1 (Сатуко)
  {
    id: 1,
    image_url: "https://hoff.ru/upload/iblock/c22/ka7sn801ywbfajeiwuwrqh7kpofwryo7.jpg",
    product_id: 1
  },
  {
    id: 23,
    image_url: "https://hoff.ru/upload/iblock/e45/48unmyq78ks45xfcwbulq6zpg5jsxd25.jpg",
    product_id: 1
  },
  {
    id: 24,
    image_url: "https://hoff.ru/upload/iblock/f1d/b0mpu2495vn2hj3l2i06ucyi2d3upi5c.jpg",
    product_id: 1
  },
  
  // Кухня 2 (Греджи)
  {
    id: 2,
    image_url: "https://hoff.ru/upload/iblock/aa0/aa0f0ca8be4c5c1e5c15914fe8a2d5b9.jpg",
    product_id: 2
  },
  {
    id: 3,
    image_url: "https://hoff.ru/upload/iblock/4d6/4d63d29d8a5fcf5627973a370a924ee6.jpg",
    product_id: 2
  },
  {
    id: 10,
    image_url: "https://hoff.ru/upload/iblock/bf3/bf38457534ee255eb803d27ab7fe26fa.jpg",
    product_id: 2
  },
  {
    id: 11,
    image_url: "https://hoff.ru/upload/iblock/cc7/cc7db4a7d8f7a26c8128aca180496666.jpg",
    product_id: 2
  },
  {
    id: 12,
    image_url: "https://hoff.ru/upload/iblock/08d/08d4594b03d2cdbec13d5a8b1dcd2d78.jpg",
    product_id: 2
  },
  {
    id: 13,
    image_url: "https://hoff.ru/upload/iblock/6d4/6d42010f9b2122c3148c3d5ad50df3e9.jpg",
    product_id: 2
  },
  {
    id: 14,
    image_url: "https://hoff.ru/upload/iblock/e90/e907ea731e54e04b2cea77f43a1ac1a6.jpg",
    product_id: 2
  },
  
  // Кухня 3 (Вайтлайн)
  {
    id: 4,
    image_url: "https://hoff.ru/upload/iblock/14e/14eef8947ee3fdbfeebd9956572c95ac.jpg",
    product_id: 3
  },
  {
    id: 5,
    image_url: "https://hoff.ru/upload/iblock/0cc/0ccd978390cfd03e466c596bd138c0bb.jpg",
    product_id: 3
  },
  {
    id: 6,
    image_url: "https://hoff.ru/upload/iblock/268/26845f69eb906aa5c1c1a02ce205aff3.jpg",
    product_id: 3
  },
  {
    id: 7,
    image_url: "https://hoff.ru/upload/iblock/f71/f71b566786e383f460901b6cebb20d74.jpg",
    product_id: 3
  },
  {
    id: 8,
    image_url: "https://hoff.ru/upload/iblock/3f4/3f419a276f4cd8bf3f6f428c8133313c.jpg",
    product_id: 3
  },
  {
    id: 9,
    image_url: "https://hoff.ru/upload/iblock/173/173da1e7b174622ed51cfac69e8100a5.jpg",
    product_id: 3
  },
  
  // Кухня 4 (Минимал)
  {
    id: 25,
    image_url: "https://hoff.ru/upload/iblock/01f/01f47759cd177ab1ab366c53eccbcef5.jpg",
    product_id: 4
  },
  {
    id: 26,
    image_url: "https://hoff.ru/upload/iblock/077/077e8766375b12c863f19a5d555720bd.jpg",
    product_id: 4
  },
  {
    id: 27,
    image_url: "https://hoff.ru/upload/iblock/e2b/e2b9f5107b8e4a53cba019eed1b59bf8.jpg",
    product_id: 4
  },
  
  // Кухня 5 (П-образная классика)
  {
    id: 15,
    image_url: "https://hoff.ru/upload/iblock/9b8/9b818b665a5ba6d3df7fc4607c9feeab.jpg",
    product_id: 5
  },
  {
    id: 16,
    image_url: "https://hoff.ru/upload/iblock/120/1204f77f2b5983d7634aba8c71f0eba6.jpg",
    product_id: 5
  },
  {
    id: 17,
    image_url: "https://hoff.ru/upload/hoff_resize/upload/iblock/e54/wsghsolceixopj7cutqmkrvb3htnxjd1.jpeg/900x600_75.webp",
    product_id: 5
  },
  
  // Кухня 7 (Лофт Индастриал)
  {
    id: 28,
    image_url: "https://hoff.ru/upload/iblock/011/8h8nq06tnwmb38fhcyq7sf84ii6v9ewe.jpg",
    product_id: 7
  },
  {
    id: 29,
    image_url: "https://hoff.ru/upload/iblock/373/c6s7g81vg0bbcg4wr0h5bx40g5wqi9wm.jpg",
    product_id: 7
  },
  {
    id: 30,
    image_url: "https://hoff.ru/upload/iblock/e5e/v6wlx4fty8pw7w591jyh7nv8i55woj1h.jpg",
    product_id: 7
  },
  {
    id: 31,
    image_url: "https://hoff.ru/upload/iblock/677/2oueeawto6z9tg0umjcv3hhqu2rp287x.jpg",
    product_id: 7
  },
  {
    id: 32,
    image_url: "https://hoff.ru/upload/iblock/009/mp1s9seyclb4tiovx6u4zwa97o16hxy0.jpg",
    product_id: 7
  },
  
  // Кухня 8 (Скандинавский Стиль)
  {
    id: 33,
    image_url: "https://hoff.ru/upload/iblock/3a9/m9vz1exx2trgtp8w7se5ssxipdufuwkc.jpg",
    product_id: 8
  },
  {
    id: 34,
    image_url: "https://hoff.ru/upload/iblock/a56/w5d00gq8lz1v1d9kj1chle2cwxxeqg06.jpg",
    product_id: 8
  },
  {
    id: 35,
    image_url: "https://hoff.ru/upload/iblock/82b/b9plqj257i31v1t1siiwej8wmx6soc1g.jpg",
    product_id: 8
  },
  
  // Кухня 9 (новая)
  {
    id: 36,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/3d0ee8fb5c5ab3075bd60414bf4e360d.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 37,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/b59759df85c6dfa73654eb819ed8e227.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 38,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/57f8c8e8ebe1312137dbb06ac3efda0e.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 40,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/322f801a2fe190cd5a3dffa6c4bfbd2b.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 41,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/aa21a27371c4b573bffac628024b226f.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 42,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/20f686fcab7100d33520bc62b423dd8d.jpg/666x444_85.webp",
    product_id: 9
  },
  
  // Кухня 10 (новая)
  {
    id: 43,
    image_url: "https://hoff.ru/upload/iblock/fae/gkvq0ottlynij4yfqvsa7n0lq11pp1pz.jpg",
    product_id: 10
  },
  {
    id: 44,
    image_url: "https://hoff.ru/upload/iblock/f81/i0s0a9xeoed1cwcskof167mx0jywufrm.jpg",
    product_id: 10
  },
  
  // Изображения для product_id = 0 (если потребуется)
  {
    id: 18,
    image_url: "https://hoff.ru/upload/iblock/f20/0jop8zoiztmh33c7h71vytwbbwxr5n96.jpg",
    product_id: 0
  },
  {
    id: 19,
    image_url: "https://cdn.nonton.ru/webp/5e3/5e32d26ea82bed2ad03830f6a0e7283c/CHelsi_kukhnya_belaya.jpeg.webp",
    product_id: 6
  },
  {
    id: 20,
    image_url: "https://hoff.ru/upload/iblock/e0a/74e2m0r6xzc6vqm3ffmkllfa7hlbo0um.jpg",
    product_id: 6
  },
  {
    id: 21,
    image_url: "https://hoff.ru/upload/iblock/bbd/7pz1g56iafqhr1y8qx3viunylefx0ai2.jpg",
    product_id: 6
  },
  {
    id: 22,
    image_url: "https://hoff.ru/upload/iblock/e3c/xniz8hc129oz4v2e6a0stky8e7jb20zu.jpg",
    product_id: 6
  },
  
  // Добавим изображения для product_id = 11
  {
    id: 45,
    image_url: "https://cdn.nonton.ru/webp/8e9/8e9a3e91ac0e3e961b75a80f441c9fbf/Oliviya_3_0kh1_8_Kukhnya_uglovaya_SHarli_pink_01_001.jpeg.webp",
    product_id: 11
  },
  {
    id: 46,
    image_url: "https://cdn.nonton.ru/webp/eab/eabdbf19f7f7a50851a8f171eb6201f2/Oliviya_3_0kh1_8_Kukhnya_uglovaya_SHarli_pink_zakr.jpeg.webp",
    product_id: 11
  },
  
  // Добавим изображения для product_id = 12
  {
    id: 47,
    image_url: "https://cdn.nonton.ru/webp/5e3/5e32d26ea82bed2ad03830f6a0e7283c/CHelsi_kukhnya_belaya.jpeg.webp",
    product_id: 12
  },
];

// Local storage keys
const PRODUCTS_KEY = "local_products";

// Product structure
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  product_images: {
    is_primary?: boolean;
    image_path: string;
  }[];
}

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProducts = () => {
      try {
        console.log("Fetching products from local storage...");
        setIsLoading(true);
        
        // Try to load from localStorage first
        const cachedProductsJson = localStorage.getItem(PRODUCTS_KEY);
        
        if (cachedProductsJson) {
          const cachedProducts = JSON.parse(cachedProductsJson);
          console.log("Loaded cached products:", cachedProducts);
          
          // Process products with correct images
          const processedProducts = processProductsWithImages(cachedProducts);
          setProducts(processedProducts);
          setIsLoading(false);
          return;
        }
        
        // If not in localStorage, fetch from the mock data in data service
        // This would typically be a fetch from an API, but we'll simulate it
        
        // Simulate API fetch delay
        setTimeout(() => {
          // This would be the data fetched from an API
          // For now, we'll create a basic set of products
          const mockProducts = [
            { 
              id: 1, 
              name: "Сатуко", 
              price: 77100, 
              category: "Кухни",
              description: "Современная кухня в японском стиле"
            },
            { 
              id: 2, 
              name: "Греджи", 
              price: 40820, 
              category: "Кухни",
              description: "Элегантная кухня с современными акцентами"
            },
            { 
              id: 3, 
              name: "Вайтлайн", 
              price: 48560, 
              category: "Кухни",
              description: "Светлая кухня в скандинавском стиле"
            },
            { 
              id: 4, 
              name: "Минимал", 
              price: 52300, 
              category: "Кухни",
              description: "Минималистичная кухня в современном стиле"
            },
            { 
              id: 5, 
              name: "П-образная классика", 
              price: 68500, 
              category: "Кухни",
              description: "Функциональная П-образная кухня"
            },
            { 
              id: 6, 
              name: "Островная Люкс", 
              price: 92800, 
              category: "Кухни",
              description: "Просторная кухня с островом"
            },
            { 
              id: 7, 
              name: "Лофт Индастриал", 
              price: 58900, 
              category: "Кухни",
              description: "Брутальная кухня в стиле лофт"
            },
            { 
              id: 8, 
              name: "Скандинавский Стиль", 
              price: 45800, 
              category: "Кухни",
              description: "Светлая просторная кухня в скандинавском стиле"
            },
            { 
              id: 9, 
              name: "Неоклассика", 
              price: 63500, 
              category: "Кухни",
              description: "Элегантная кухня, сочетающая классические формы"
            },
            { 
              id: 10, 
              name: "Урбан", 
              price: 55200, 
              category: "Кухни",
              description: "Стильная городская кухня в стиле хай-тек"
            },
            { 
              id: 11, 
              name: "Рустик", 
              price: 72800, 
              category: "Кухни",
              description: "Деревенская кухня с натуральными материалами"
            },
            { 
              id: 12, 
              name: "Эко-Стиль", 
              price: 67500, 
              category: "Кухни",
              description: "Экологичная кухня из натуральных материалов"
            },
            { 
              id: 0, 
              name: "Модерна", 
              price: 38900, 
              category: "Кухни",
              description: "Компактная современная кухня"
            },
          ];
          
          // Process products with images
          const processedProducts = processProductsWithImages(mockProducts);
          
          // Save to localStorage for future use
          localStorage.setItem(PRODUCTS_KEY, JSON.stringify(processedProducts));
          
          setProducts(processedProducts);
          setIsLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error loading products:", err);
        setError(err as Error);
        setIsLoading(false);
        toast.error("Ошибка при загрузке товаров");
      }
    };
    
    loadProducts();
  }, []);

  // Function to process products with correct images from our mapping
  const processProductsWithImages = (products: any[]) => {
    return products.map(product => {
      // Find all images for this product
      const productImages = productImagesMap.filter(img => img.product_id === product.id);
      
      // Map them to the format our app expects
      const formattedImages = productImages.map((img, index) => ({
        image_path: img.image_url,
        is_primary: index === 0 // First image is primary
      }));
      
      // If we don't have images for this product, use a placeholder
      if (formattedImages.length === 0) {
        formattedImages.push({
          image_path: "/placeholder.svg",
          is_primary: true
        });
      }
      
      // Return the product with images
      return {
        ...product,
        product_images: formattedImages
      };
    });
  };

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
                <ProductCard 
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  product_images={product.product_images}
                />
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
