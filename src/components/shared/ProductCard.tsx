
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
      <div className="card overflow-hidden flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-sm text-accent uppercase tracking-wider font-medium mb-1">{category}</p>
          <h3 className="font-heading font-medium text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">{name}</h3>
          <p className="text-accent font-semibold mt-auto text-lg">
            {price.toLocaleString("ru-RU")} ₽
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
