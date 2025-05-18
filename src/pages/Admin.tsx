
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dataService } from "@/services/DataService";
import { ShoppingCart, Ruler, MessageSquare, Package2 } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("orders");

  return (
    <div className="py-12 animate-fade-in">
      <div className="container">
        <SectionTitle 
          title="Админ-панель" 
          subtitle="Управление заказами, заявками и каталогом мебели" 
        />

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-8">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-8">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Заказы</span>
            </TabsTrigger>
            <TabsTrigger value="measurements" className="flex items-center gap-2">
              <Ruler size={18} />
              <span>Заявки на замер</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare size={18} />
              <span>Сообщения</span>
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package2 size={18} />
              <span>Товары</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="pt-4">
            <OrdersTab />
          </TabsContent>
          
          <TabsContent value="measurements" className="pt-4">
            <MeasurementsTab />
          </TabsContent>
          
          <TabsContent value="messages" className="pt-4">
            <MessagesTab />
          </TabsContent>
          
          <TabsContent value="products" className="pt-4">
            <ProductsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const OrdersTab = () => {
  const { data: orders = [], isLoading, refetch } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: () => dataService.getOrders(),
  });
  
  const updateOrderStatus = async (orderId: number, newStatus: string) => {
    try {
      await dataService.updateOrderStatus(orderId, newStatus);
      toast.success("Статус заказа обновлен");
      refetch();
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
                <tr key={order.id} className="border-b border-gray-200">
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

const MeasurementsTab = () => {
  const { data: requests = [], isLoading, refetch } = useQuery({
    queryKey: ["admin-measurements"],
    queryFn: () => dataService.getMeasurementRequests(),
  });
  
  const updateRequestStatus = async (requestId: number, newStatus: string) => {
    try {
      await dataService.updateMeasurementRequestStatus(requestId, newStatus);
      toast.success("Статус заявки обновлен");
      refetch();
    } catch (error) {
      toast.error("Ошибка при обновлении статуса");
    }
  };

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Заявки на замер</h2>
      {requests.length === 0 ? (
        <p className="text-muted-foreground">Заявок на замер пока нет</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr className="bg-secondary">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Клиент</th>
                <th className="px-4 py-3 text-left">Тип мебели</th>
                <th className="px-4 py-3 text-left">Адрес</th>
                <th className="px-4 py-3 text-left">Дата и время</th>
                <th className="px-4 py-3 text-left">Статус</th>
                <th className="px-4 py-3 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">#{request.id}</td>
                  <td className="px-4 py-3">
                    <div>{request.name}</div>
                    <div className="text-sm text-gray-500">{request.phone}</div>
                  </td>
                  <td className="px-4 py-3">{request.furniture_type}</td>
                  <td className="px-4 py-3">{request.address}</td>
                  <td className="px-4 py-3">
                    {request.preferred_date && request.preferred_time 
                      ? `${request.preferred_date}, ${request.preferred_time}`
                      : 'Не указано'
                    }
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      request.status === 'Выполнено' 
                        ? 'bg-green-100 text-green-800'
                        : request.status === 'В работе'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select 
                      value={request.status}
                      onChange={(e) => updateRequestStatus(request.id, e.target.value)}
                      className="px-2 py-1 border rounded-md text-sm"
                    >
                      <option value="Новая">Новая</option>
                      <option value="Запланирована">Запланирована</option>
                      <option value="В работе">В работе</option>
                      <option value="Выполнено">Выполнено</option>
                      <option value="Отменено">Отменено</option>
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

const MessagesTab = () => {
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: () => dataService.getContactMessages(),
  });

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Сообщения от клиентов</h2>
      {messages.length === 0 ? (
        <p className="text-muted-foreground">Сообщений пока нет</p>
      ) : (
        <div className="space-y-6">
          {messages.map((message) => (
            <div key={message.id} className="border rounded-lg p-4 bg-white">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{message.name}</h3>
                <span className="text-sm text-gray-500">{formatDate(message.created_at)}</span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <div>{message.email}</div>
                <div>{message.phone}</div>
              </div>
              <p className="text-gray-800 mt-2">{message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProductsTab = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: () => dataService.getProducts(),
  });

  if (isLoading) {
    return <div className="text-center">Загрузка...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Управление товарами</h2>
      <div className="mb-6">
        <a 
          href="#" 
          className="inline-block px-4 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
        >
          Добавить новый товар
        </a>
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
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="px-4 py-3">#{product.id}</td>
                  <td className="px-4 py-3">
                    <img 
                      src={product.product_images[0]?.image_path || "/placeholder.svg"} 
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.price.toLocaleString('ru-RU')} ₽</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">
                        Редактировать
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md">
                        Удалить
                      </button>
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

export default Admin;
