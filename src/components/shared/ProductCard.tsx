
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  product_images?: { is_primary?: boolean; image_path: string }[];
  image?: string; // Keep this for backward compatibility
}

const ProductCard = ({ id, name, price, product_images, image, category }: ProductCardProps) => {
  // Determine which image URL to use - either from product_images (preferred) or from image prop
  const imageUrl = product_images && product_images.length > 0
    ? product_images.find(img => img.is_primary)?.image_path || product_images[0].image_path
    : image || "/placeholder.svg";

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="card overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{category}</p>
          <h3 className="font-heading font-medium text-lg mb-2">{name}</h3>
          <p className="text-accent font-semibold">
            {price.toLocaleString("ru-RU")} ₽
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
