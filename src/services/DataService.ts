
import { 
  productsMockData, 
  ordersMockData, 
  measurementRequestsMockData, 
  contactMessagesMockData,
  Product,
  Order,
  MeasurementRequest,
  ContactMessage
} from '../data/mockData';

/**
 * Класс для работы с данными в локальном хранилище
 * Заменяет Supabase для автономной работы сайта
 */
class DataService {
  private readonly PRODUCTS_KEY = 'homestyle_products';
  private readonly ORDERS_KEY = 'homestyle_orders';
  private readonly MEASUREMENT_REQUESTS_KEY = 'homestyle_measurement_requests';
  private readonly CONTACT_MESSAGES_KEY = 'homestyle_contact_messages';

  constructor() {
    this.initData();
  }

  /**
   * Инициализирует данные при первом запуске
   */
  private initData() {
    if (!localStorage.getItem(this.PRODUCTS_KEY)) {
      localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(productsMockData));
    }
    if (!localStorage.getItem(this.ORDERS_KEY)) {
      localStorage.setItem(this.ORDERS_KEY, JSON.stringify(ordersMockData));
    }
    if (!localStorage.getItem(this.MEASUREMENT_REQUESTS_KEY)) {
      localStorage.setItem(this.MEASUREMENT_REQUESTS_KEY, JSON.stringify(measurementRequestsMockData));
    }
    if (!localStorage.getItem(this.CONTACT_MESSAGES_KEY)) {
      localStorage.setItem(this.CONTACT_MESSAGES_KEY, JSON.stringify(contactMessagesMockData));
    }
  }

  // Методы для работы с продуктами
  async getProducts(): Promise<Product[]> {
    const productsString = localStorage.getItem(this.PRODUCTS_KEY) || '[]';
    return JSON.parse(productsString);
  }

  async getProductById(id: number): Promise<Product | null> {
    const products = await this.getProducts();
    return products.find(product => product.id === id) || null;
  }

  async addProduct(product: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
    const products = await this.getProducts();
    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct = {
      ...product,
      id: newId,
      created_at: new Date().toISOString()
    } as Product;
    
    localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify([...products, newProduct]));
    return newProduct;
  }

  async updateProduct(id: number, product: Partial<Product>): Promise<Product | null> {
    const products = await this.getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    const updatedProduct = { ...products[index], ...product };
    products[index] = updatedProduct;
    localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(products));
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const products = await this.getProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    if (filteredProducts.length === products.length) return false;
    
    localStorage.setItem(this.PRODUCTS_KEY, JSON.stringify(filteredProducts));
    return true;
  }

  // Методы для работы с заказами
  async getOrders(): Promise<Order[]> {
    const ordersString = localStorage.getItem(this.ORDERS_KEY) || '[]';
    return JSON.parse(ordersString);
  }

  async getOrderById(id: number): Promise<Order | null> {
    const orders = await this.getOrders();
    return orders.find(order => order.id === id) || null;
  }

  async addOrder(order: Omit<Order, 'id' | 'created_at'>): Promise<Order> {
    const orders = await this.getOrders();
    const newId = orders.length ? Math.max(...orders.map(o => o.id)) + 1 : 1;
    const newOrder = {
      ...order,
      id: newId,
      created_at: new Date().toISOString()
    } as Order;
    
    localStorage.setItem(this.ORDERS_KEY, JSON.stringify([...orders, newOrder]));
    return newOrder;
  }

  async updateOrderStatus(id: number, status: string): Promise<Order | null> {
    const orders = await this.getOrders();
    const index = orders.findIndex(o => o.id === id);
    if (index === -1) return null;
    
    orders[index].status = status;
    localStorage.setItem(this.ORDERS_KEY, JSON.stringify(orders));
    return orders[index];
  }

  // Методы для работы с заявками на замер
  async getMeasurementRequests(): Promise<MeasurementRequest[]> {
    const requestsString = localStorage.getItem(this.MEASUREMENT_REQUESTS_KEY) || '[]';
    return JSON.parse(requestsString);
  }

  async addMeasurementRequest(request: Omit<MeasurementRequest, 'id' | 'created_at' | 'status'>): Promise<MeasurementRequest> {
    const requests = await this.getMeasurementRequests();
    const newId = requests.length ? Math.max(...requests.map(r => r.id)) + 1 : 1;
    const newRequest = {
      ...request,
      id: newId,
      status: 'Новая',
      created_at: new Date().toISOString()
    } as MeasurementRequest;
    
    localStorage.setItem(this.MEASUREMENT_REQUESTS_KEY, JSON.stringify([...requests, newRequest]));
    return newRequest;
  }

  async updateMeasurementRequestStatus(id: number, status: string): Promise<MeasurementRequest | null> {
    const requests = await this.getMeasurementRequests();
    const index = requests.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    requests[index].status = status;
    localStorage.setItem(this.MEASUREMENT_REQUESTS_KEY, JSON.stringify(requests));
    return requests[index];
  }

  // Методы для работы с контактными сообщениями
  async getContactMessages(): Promise<ContactMessage[]> {
    const messagesString = localStorage.getItem(this.CONTACT_MESSAGES_KEY) || '[]';
    return JSON.parse(messagesString);
  }

  async addContactMessage(message: Omit<ContactMessage, 'id' | 'created_at'>): Promise<ContactMessage> {
    const messages = await this.getContactMessages();
    const newId = messages.length ? Math.max(...messages.map(m => m.id)) + 1 : 1;
    const newMessage = {
      ...message,
      id: newId,
      created_at: new Date().toISOString()
    } as ContactMessage;
    
    localStorage.setItem(this.CONTACT_MESSAGES_KEY, JSON.stringify([...messages, newMessage]));
    return newMessage;
  }
}

export const dataService = new DataService();
