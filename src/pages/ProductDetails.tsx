
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronRight, Truck, Shield, Wrench } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";
import { dataService } from "../services/DataService";

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      if (!id) throw new Error("No product ID provided");
      const productId = parseInt(id);
      
      console.log("Fetching product details for id:", productId);
      const data = await dataService.getProductById(productId);
      
      if (!data) {
        throw new Error("Product not found");
      }

      console.log("Product data fetched:", data);
      return data;
    },
  });

  const { data: relatedProducts = [] } = useQuery({
    queryKey: ["related-products", product?.category],
    queryFn: async () => {
      if (!product?.category || !id) return [];
      const productId = parseInt(id);
      
      console.log("Fetching related products for category:", product.category);
      const allProducts = await dataService.getProducts();
      const related = allProducts
        .filter(p => p.category === product.category && p.id !== productId)
        .slice(0, 3);

      console.log("Related products fetched:", related);
      return related;
    },
    enabled: !!product?.category,
  });

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.product_images && product.product_images.length > 0 
        ? product.product_images[0].image_path 
        : "/placeholder.svg",
      category: product.category || "",
    });
    
    toast.success("Товар добавлен в корзину");
  };

  if (isLoading) {
    return (
      <div className="container py-32 min-h-screen">
        <div className="text-center animate-pulse">
          <div className="w-2/3 h-6 bg-gray-200 rounded mx-auto mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-32 min-h-screen">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Товар не найден</p>
        </div>
      </div>
    );
  }

  const productImages = product.product_images && product.product_images.length > 0 
    ? product.product_images.map(img => img.image_path)
    : ["/placeholder.svg"];

  // Используем информацию из объекта specifications, если он есть
  const specifications = product.specifications || {
    "Материал": product.material || "Не указан",
    "Цвет": product.color || "Не указан",
    "Размеры": product.dimensions || "Не указаны",
    "Фурнитура": product.hardware || "Не указана",
    "Гарантия": product.warranty || "Не указана",
  };

  return (
    <div className="py-32 animate-fade-in">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-12">
          <a href="/" className="hover:text-accent">
            Главная
          </a>
          <ChevronRight size={16} />
          <a href="/catalog" className="hover:text-accent">
            Каталог
          </a>
          <ChevronRight size={16} />
          <span className="text-accent">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Images */}
          <div className="space-y-6 animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index
                      ? "border-2 border-accent shadow-md scale-105"
                      : "border border-gray-200 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-up">
            <h1 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-accent mb-6">
              {product.price.toLocaleString("ru-RU")} ₽
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-xl">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Truck className="text-accent" size={20} />
                </div>
                <span className="text-sm">Доставка по России</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-xl">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Shield className="text-accent" size={20} />
                </div>
                <span className="text-sm">Гарантия {
                  product.specifications && typeof product.specifications === 'object' && 'Гарантия' in product.specifications 
                    ? String(product.specifications.Гарантия) 
                    : (product.warranty || "2 года")
                }</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-accent/5 rounded-xl">
                <div className="p-2 bg-accent/10 rounded-full">
                  <Wrench className="text-accent" size={20} />
                </div>
                <span className="text-sm">Установка</span>
              </div>
            </div>

            {/* Features - добавим отображение особенностей */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-heading font-semibold mb-4 flex items-center">
                  <span className="w-2 h-8 bg-accent mr-3 rounded-full"></span>
                  Особенности
                </h2>
                <ul className="space-y-2 bg-gray-50 p-6 rounded-xl">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <span className="h-2 w-2 bg-accent rounded-full mt-2 mr-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-4 flex items-center">
                <span className="w-2 h-8 bg-accent mr-3 rounded-full"></span>
                Характеристики
              </h2>
              <div className="space-y-2 bg-gray-50 p-6 rounded-xl">
                {product.specifications && typeof product.specifications === 'object' ? (
                  // Если specifications — это вложенный объект с категориями
                  Object.entries(product.specifications).map(([category, specs]) => (
                    <div key={category} className="mb-4">
                      <h3 className="text-lg font-medium mb-2">{category}</h3>
                      {typeof specs === 'object' && specs !== null && (
                        <div className="space-y-1">
                          {Object.entries(specs).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between py-2 px-3 border-b border-gray-200 hover:bg-white rounded-lg transition-colors group"
                            >
                              <span className="text-muted-foreground group-hover:text-gray-700 transition-colors">{key}</span>
                              <span className="font-medium">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {typeof specs === 'string' && (
                        <div className="flex py-2 px-3 border-b border-gray-200 hover:bg-white rounded-lg transition-colors">
                          <span className="font-medium">{specs}</span>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  // Если specifications — это плоский объект или отсутствует
                  Object.entries(specifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between py-2 px-3 border-b border-gray-200 hover:bg-white rounded-lg transition-colors group"
                    >
                      <span className="text-muted-foreground group-hover:text-gray-700 transition-colors">{key}</span>
                      <span className="font-medium">{String(value)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10">
              <button 
                onClick={handleAddToCart} 
                className="btn-primary w-full py-4 text-lg font-medium flex items-center justify-center space-x-2"
              >
                <span>В корзину</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-16 border-t">
            <SectionTitle
              title="Похожие товары"
              subtitle="Вам также может понравиться"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category || ""}
                    product_images={product.product_images}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
