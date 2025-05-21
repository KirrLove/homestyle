
import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { X, Save } from "lucide-react";

interface ProductFormData {
  id?: number;
  name: string;
  price: number;
  category: string;
  description: string;
  material: string;
  dimensions: string;
  hardware: string;
  color: string;
  warranty: string;
  features: string; // Будет преобразовано в массив
  specifications: string; // Будет преобразовано в объект
}

interface ProductEditFormProps {
  product?: {
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
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ProductEditForm = ({ product, onSubmit, onCancel }: ProductEditFormProps) => {
  // Подготовка данных для формы
  const defaultValues = product
    ? {
        ...product,
        features: product.features ? product.features.join("\n") : "",
        specifications: product.specifications
          ? JSON.stringify(product.specifications, null, 2)
          : "",
      }
    : {
        name: "",
        price: 0,
        category: "",
        description: "",
        material: "",
        dimensions: "",
        hardware: "",
        color: "",
        warranty: "",
        features: "",
        specifications: "",
      };

  const form = useForm<ProductFormData>({
    defaultValues,
  });

  const handleSubmit = (data: ProductFormData) => {
    // Преобразуем строки в нужные форматы
    const features = data.features
      .split("\n")
      .filter((feature) => feature.trim() !== "");

    // Безопасное преобразование JSON
    let specifications = {};
    try {
      specifications = data.specifications ? JSON.parse(data.specifications) : {};
    } catch (error) {
      console.error("Invalid JSON format for specifications", error);
    }

    onSubmit({
      ...data,
      price: Number(data.price),
      features,
      specifications,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Название</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цена (₽)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Категория</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Цвет</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="material"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Материал</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dimensions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Размеры</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hardware"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фурнитура</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="warranty"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Гарантия</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Особенности (каждая особенность на новой строке)
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Особенность 1&#10;Особенность 2&#10;..."
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specifications"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Характеристики (в формате JSON)</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={`{\n  "Длина": "200 см",\n  "Ширина": "150 см"\n}`}
                  className="min-h-[150px] font-mono"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="flex items-center gap-2"
          >
            <X size={18} /> Отмена
          </Button>
          <Button type="submit" className="flex items-center gap-2">
            <Save size={18} /> Сохранить
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductEditForm;
