
import { ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import SectionTitle from "../components/shared/SectionTitle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";

// Local storage key for orders
const ORDERS_KEY = "local_orders";

const Cart = () => {
  const { items, removeItem, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Creating order with items:", items);
      
      // Prepare order details
      const orderDetails = items.map(item => ({
        product_id: item.id,
        product_name: item.name,
        category: item.category,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity
      }));

      // Create the order object
      const newOrder = {
        id: Date.now(),
        created_at: new Date().toISOString(),
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        delivery_address: formData.address,
        total_amount: getTotalPrice(),
        status: 'Новый',
        order_details: orderDetails
      };

      // Get existing orders from localStorage
      const existingOrdersJSON = localStorage.getItem(ORDERS_KEY);
      const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : [];
      
      // Add new order to existing orders
      const updatedOrders = [...existingOrders, newOrder];
      
      // Save to localStorage
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));

      toast.success("Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.");
      clearCart();
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error("Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h2 className="mt-4 text-lg font-medium">Корзина пуста</h2>
          <p className="mt-2 text-muted-foreground">
            Перейдите в каталог, чтобы добавить товары
          </p>
          <Link to="/catalog" className="btn-primary mt-4 inline-block">
            Перейти в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <SectionTitle title="Корзина" subtitle="Ваши выбранные товары" />
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-lg border p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-24 rounded-md object-cover"
            />
            <div className="flex-grow">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
              <p className="mt-1">
                <span className="font-medium text-accent">
                  {item.price.toLocaleString("ru-RU")} ₽
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  × {item.quantity} шт.
                </span>
              </p>
              <p className="mt-1 font-medium">
                Итого: {(item.price * item.quantity).toLocaleString("ru-RU")} ₽
              </p>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="text-destructive hover:text-destructive/80"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
        <div className="mt-8 border-t pt-4">
          <div className="flex justify-between text-lg font-medium">
            <span>Итого:</span>
            <span>{getTotalPrice().toLocaleString("ru-RU")} ₽</span>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="btn-primary mt-4 w-full">Оформить заказ</button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Оформление заказа</DialogTitle>
                <DialogDescription>
                  Заполните форму для оформления заказа. Мы свяжемся с вами для подтверждения.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Адрес доставки
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium">Ваш заказ:</h4>
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>{(item.price * item.quantity).toLocaleString("ru-RU")} ₽</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 font-medium">
                    <div className="flex justify-between">
                      <span>Итого:</span>
                      <span>{getTotalPrice().toLocaleString("ru-RU")} ₽</span>
                    </div>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Оформление..." : "Подтвердить заказ"}
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Cart;
