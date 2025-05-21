
import { useState, useEffect } from "react";
import { localDataService } from "@/services/LocalDataService";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductEditForm from "./ProductEditForm";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string | null;
  description?: string | null;
  material?: string | null;
  dimensions?: string | null;
  hardware?: string | null;
  color?: string | null;
  warranty?: string | null;
  features?: string[];
  specifications?: Record<string, any>;
  product_images?: { is_primary?: boolean; image_path: string }[];
};

const ProductsTab = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const loadedProducts = await localDataService.getProducts();
      setProducts(loadedProducts);
    } catch (error) {
      console.error("Error loading products:", error);
      toast.error("Ошибка при загрузке товаров");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  const handleAddNew = () => {
    setIsAddingProduct(true);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setIsAddingProduct(false);
  };

  const handleDeleteProduct = async (id: number) => {
    if (!window.confirm("Вы действительно хотите удалить этот товар?")) {
      return;
    }
    
    try {
      await localDataService.deleteProduct(id);
      toast.success("Товар удален");
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Ошибка при удалении товара");
    }
  };

  const handleSaveProduct = async (productData: any) => {
    try {
      if (editingProduct) {
        await localDataService.updateProduct(editingProduct.id, productData);
        toast.success("Товар обновлен");
      } else {
        await localDataService.addProduct(productData);
        toast.success("Товар добавлен");
      }
      
      setEditingProduct(null);
      setIsAddingProduct(false);
      loadProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      toast.error("Ошибка при сохранении товара");
    }
  };

  if (editingProduct || isAddingProduct) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-6">
          {editingProduct ? "Редактирование товара" : "Добавление нового товара"}
        </h2>
        <ProductEditForm 
          product={editingProduct || undefined} 
          onSubmit={handleSaveProduct} 
          onCancel={handleCancelEdit} 
        />
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Управление товарами</h2>
      <div className="mb-6">
        <Button 
          onClick={handleAddNew}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white"
        >
          <Plus size={18} /> Добавить новый товар
        </Button>
      </div>
      
      {products.length === 0 ? (
        <p className="text-muted-foreground">Товаров пока нет</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Фото</th>
                <th className="px-4 py-3 text-left">Название</th>
                <th className="px-4 py-3 text-left">Категория</th>
                <th className="px-4 py-3 text-left">Цена</th>
                <th className="px-4 py-3 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-muted/30">
                  <td className="px-4 py-3">#{product.id}</td>
                  <td className="px-4 py-3">
                    <img 
                      src={product.product_images?.[0]?.image_path || "/placeholder.svg"} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.price.toLocaleString('ru-RU')} ₽</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditProduct(product)}
                        className="flex items-center gap-1"
                      >
                        <Pencil size={16} /> Редактировать
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="flex items-center gap-1"
                      >
                        <Trash2 size={16} /> Удалить
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsTab;
