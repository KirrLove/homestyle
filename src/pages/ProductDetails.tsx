import { useState } from "react";
import { useParams } from "react-router-dom";
import { ChevronRight, Truck, Shield, Wrench } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Product = Database['public']['Tables']['products']['Row'] & {
  product_images: Database['public']['Tables']['product_images']['Row'][];
};

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
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images (
            image_path,
            is_primary
          )
        `)
        .eq("id", productId)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        throw error;
      }

      console.log("Product data fetched:", data);
      return data as Product;
    },
  });

  const { data: relatedProducts = [] } = useQuery({
    queryKey: ["related-products", product?.category],
    queryFn: async () => {
      if (!product?.category || !id) return [];
      const productId = parseInt(id);
      
      console.log("Fetching related products for category:", product.category);
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          product_images (
            image_path,
            is_primary
          )
        `)
        .eq("category", product.category)
        .neq("id", productId)
        .limit(2);

      if (error) {
        console.error("Error fetching related products:", error);
        throw error;
      }

      console.log("Related products fetched:", data);
      return data.map((product: Product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category || "",
        image: product.product_images.find((img) => img.is_primary)?.image_path ||
          product.product_images[0]?.image_path ||
          "/placeholder.svg",
      }));
    },
    enabled: !!product?.category,
  });

  const handleAddToCart = () => {
    if (!product) return;
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.product_images[0]?.image_path || "/placeholder.svg",
      category: product.category || "",
    });
    
    toast.success("Товар добавлен в корзину");
  };

  if (isLoading) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Загрузка товара...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">Товар не найден</p>
        </div>
      </div>
    );
  }

  const productImages = product.product_images.length > 0 
    ? product.product_images.map(img => img.image_path)
    : ["/placeholder.svg"];

  const specifications = {
    "Материал": product.material || "Не указан",
    "Цвет": product.color || "Не указан",
    "Размеры": product.dimensions || "Не указаны",
    "Фурнитура": product.hardware || "Не указана",
    "Гарантия": product.warranty || "Не указана",
  };

  return (
    <div className="py-12 animate-fade-in">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-accent">
            Главная
          </a>
          <ChevronRight size={16} />
          <a href="/catalog" className="hover:text-accent">
            Каталог
          </a>
          <ChevronRight size={16} />
          <span className="text-primary">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-accent"
                      : "border-transparent"
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
          <div>
            <h1 className="text-3xl font-heading font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-semibold text-accent mb-6">
              {product.price.toLocaleString("ru-RU")} ₽
            </p>
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-heading font-semibold mb-4">
                Характеристики
              </h2>
              <div className="space-y-2">
                {Object.entries(specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-200"
                  >
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Truck className="text-accent" />
                <span className="text-sm">Доставка по России</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="text-accent" />
                <span className="text-sm">Гарантия {product.warranty || "2 года"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="text-accent" />
                <span className="text-sm">Установка</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button onClick={handleAddToCart} className="btn-primary w-full">
                В корзину
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
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
                  <ProductCard {...product} />
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