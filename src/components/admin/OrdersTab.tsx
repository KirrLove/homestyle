
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";

const ORDERS_KEY = "local_orders";

export const OrdersTab = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load orders from localStorage
    const loadOrders = () => {
      try {
        const ordersJSON = localStorage.getItem(ORDERS_KEY);
        const ordersData = ordersJSON ? JSON.parse(ordersJSON) : [];
        setOrders(ordersData);
      } catch (error) {
        console.error("Error loading orders:", error);
        toast.error("Ошибка при загрузке заказов");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadOrders();
  }, []);
  
  const updateOrderStatus = (orderId: number, newStatus: string) => {
    try {
      // Find the order and update its status
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      );
      
      // Save back to localStorage
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      toast.success("Статус заказа обновлен");
    } catch (error) {
      toast.error("Ошибка при обновлении статуса");
    }
  };

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Список заказов</h2>
      {orders.length === 0 ? (
        <p className="text-muted-foreground">Заказов пока нет</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Клиент</th>
                <th className="px-4 py-3 text-left">Контакты</th>
                <th className="px-4 py-3 text-left">Сумма</th>
                <th className="px-4 py-3 text-left">Дата</th>
                <th className="px-4 py-3 text-left">Статус</th>
                <th className="px-4 py-3 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-200 hover:bg-muted/30">
                  <td className="px-4 py-3">#{order.id}</td>
                  <td className="px-4 py-3">{order.user_name}</td>
                  <td className="px-4 py-3">
                    <div>{order.user_email}</div>
                    <div>{order.user_phone}</div>
                  </td>
                  <td className="px-4 py-3">{order.total_amount.toLocaleString('ru-RU')} ₽</td>
                  <td className="px-4 py-3">{formatDate(order.created_at)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Доставлен' 
                        ? 'bg-green-100 text-green-800'
                        : order.status === 'В обработке'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select 
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      className="px-2 py-1 border rounded-md text-sm"
                    >
                      <option value="Новый">Новый</option>
                      <option value="В обработке">В обработке</option>
                      <option value="Отправлен">Отправлен</option>
                      <option value="Доставлен">Доставлен</option>
                      <option value="Отменен">Отменен</option>
                    </select>
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
