
// LocalDataService.ts
// Service to handle all local data operations without needing a backend

// Storage keys
const PRODUCTS_KEY = "local_products";
const ORDERS_KEY = "local_orders";
const MEASUREMENT_REQUESTS_KEY = "local_measurement_requests";
const CONTACT_MESSAGES_KEY = "local_contact_messages";

// Interface definitions
interface ProductImage {
  id?: number;
  image_path: string;
  is_primary?: boolean;
  product_id?: number;
}

interface Product {
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
  product_images: ProductImage[];
}

interface Order {
  id: number;
  created_at: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  delivery_address: string;
  total_amount: number;
  status: string;
  order_details: any[];
}

interface MeasurementRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  furniture_type: string;
  preferred_date: string | null;
  preferred_time: string | null;
  additional_notes: string | null;
  created_at: string;
  status: string;
}

interface ContactMessage {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

class LocalDataService {
  // Products
  getProducts = async (): Promise<Product[]> => {
    try {
      const productsJson = localStorage.getItem(PRODUCTS_KEY);
      return productsJson ? JSON.parse(productsJson) : [];
    } catch (error) {
      console.error("Error getting products:", error);
      return [];
    }
  }

  getProductById = async (id: number): Promise<Product | null> => {
    try {
      const products = await this.getProducts();
      return products.find(p => p.id === id) || null;
    } catch (error) {
      console.error("Error getting product by ID:", error);
      return null;
    }
  }

  addProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
    try {
      const products = await this.getProducts();
      const newId = products.length > 0 
        ? Math.max(...products.map(p => p.id)) + 1 
        : 1;
      
      const newProduct: Product = {
        ...product,
        id: newId
      };
      
      const updatedProducts = [...products, newProduct];
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
      return newProduct;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  }

  updateProduct = async (id: number, updates: Partial<Product>): Promise<Product> => {
    try {
      const products = await this.getProducts();
      const productIndex = products.findIndex(p => p.id === id);
      
      if (productIndex === -1) {
        throw new Error(`Product with ID ${id} not found`);
      }
      
      const updatedProduct = {
        ...products[productIndex],
        ...updates
      };
      
      products[productIndex] = updatedProduct;
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
      
      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  }

  deleteProduct = async (id: number): Promise<void> => {
    try {
      const products = await this.getProducts();
      const filteredProducts = products.filter(p => p.id !== id);
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(filteredProducts));
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  }

  // Orders
  getOrders = async (): Promise<Order[]> => {
    try {
      const ordersJson = localStorage.getItem(ORDERS_KEY);
      return ordersJson ? JSON.parse(ordersJson) : [];
    } catch (error) {
      console.error("Error getting orders:", error);
      return [];
    }
  }

  getOrderById = async (id: number): Promise<Order | null> => {
    try {
      const orders = await this.getOrders();
      return orders.find(o => o.id === id) || null;
    } catch (error) {
      console.error("Error getting order by ID:", error);
      return null;
    }
  }

  createOrder = async (orderData: Omit<Order, 'id' | 'created_at'>): Promise<Order> => {
    try {
      const orders = await this.getOrders();
      
      const newOrder: Order = {
        ...orderData,
        id: Date.now(),
        created_at: new Date().toISOString(),
      };
      
      const updatedOrders = [...orders, newOrder];
      localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
      
      return newOrder;
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  }

  updateOrderStatus = async (id: number, status: string): Promise<Order> => {
    try {
      const orders = await this.getOrders();
      const orderIndex = orders.findIndex(o => o.id === id);
      
      if (orderIndex === -1) {
        throw new Error(`Order with ID ${id} not found`);
      }
      
      const updatedOrder = {
        ...orders[orderIndex],
        status
      };
      
      orders[orderIndex] = updatedOrder;
      localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
      
      return updatedOrder;
    } catch (error) {
      console.error("Error updating order status:", error);
      throw error;
    }
  }

  // Measurement Requests
  getMeasurementRequests = async (): Promise<MeasurementRequest[]> => {
    try {
      const requestsJson = localStorage.getItem(MEASUREMENT_REQUESTS_KEY);
      return requestsJson ? JSON.parse(requestsJson) : [];
    } catch (error) {
      console.error("Error getting measurement requests:", error);
      return [];
    }
  }

  createMeasurementRequest = async (requestData: Omit<MeasurementRequest, 'id' | 'created_at' | 'status'>): Promise<MeasurementRequest> => {
    try {
      const requests = await this.getMeasurementRequests();
      
      const newRequest: MeasurementRequest = {
        ...requestData,
        id: Date.now(),
        created_at: new Date().toISOString(),
        status: 'Новая'
      };
      
      const updatedRequests = [...requests, newRequest];
      localStorage.setItem(MEASUREMENT_REQUESTS_KEY, JSON.stringify(updatedRequests));
      
      return newRequest;
    } catch (error) {
      console.error("Error creating measurement request:", error);
      throw error;
    }
  }

  updateMeasurementRequestStatus = async (id: number, status: string): Promise<MeasurementRequest> => {
    try {
      const requests = await this.getMeasurementRequests();
      const requestIndex = requests.findIndex(r => r.id === id);
      
      if (requestIndex === -1) {
        throw new Error(`Measurement request with ID ${id} not found`);
      }
      
      const updatedRequest = {
        ...requests[requestIndex],
        status
      };
      
      requests[requestIndex] = updatedRequest;
      localStorage.setItem(MEASUREMENT_REQUESTS_KEY, JSON.stringify(requests));
      
      return updatedRequest;
    } catch (error) {
      console.error("Error updating measurement request status:", error);
      throw error;
    }
  }

  // Contact Messages
  getContactMessages = async (): Promise<ContactMessage[]> => {
    try {
      const messagesJson = localStorage.getItem(CONTACT_MESSAGES_KEY);
      return messagesJson ? JSON.parse(messagesJson) : [];
    } catch (error) {
      console.error("Error getting contact messages:", error);
      return [];
    }
  }

  createContactMessage = async (messageData: Omit<ContactMessage, 'id' | 'created_at'>): Promise<ContactMessage> => {
    try {
      const messages = await this.getContactMessages();
      
      const newMessage: ContactMessage = {
        ...messageData,
        id: Date.now(),
        created_at: new Date().toISOString()
      };
      
      const updatedMessages = [...messages, newMessage];
      localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(updatedMessages));
      
      return newMessage;
    } catch (error) {
      console.error("Error creating contact message:", error);
      throw error;
    }
  }
}

export const localDataService = new LocalDataService();
