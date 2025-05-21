
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Ruler, MessageSquare, Package2 } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import ProductsTab from "../components/admin/ProductsTab";
import { OrdersTab } from "../components/admin/OrdersTab";
import { MeasurementsTab } from "../components/admin/MeasurementsTab";
import { MessagesTab } from "../components/admin/MessagesTab";

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

export default Admin;
