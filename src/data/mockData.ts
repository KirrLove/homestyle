
import { Database } from "@/integrations/supabase/types";

// Типы данных для продуктов
export type Product = Database['public']['Tables']['products']['Row'] & {
  product_images: Database['public']['Tables']['product_images']['Row'][]
};

// Типы данных для заказов
export type Order = Database['public']['Tables']['orders']['Row'] & {
  order_items: (Database['public']['Tables']['order_items']['Row'] & {
    product: Database['public']['Tables']['products']['Row']
  })[]
};

// Типы данных для заявок
export type MeasurementRequest = Database['public']['Tables']['measurement_requests']['Row'];
export type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];

// Моковые данные продуктов
export const productsMockData: Product[] = [
  {
    id: 1,
    name: 'Кухня "Модерн"',
    price: 75000,
    category: 'Кухни',
    description: 'Современная кухня с глянцевыми фасадами и эргономичной планировкой. Отличный вариант для городской квартиры.',
    material: 'ЛДСП, акрил',
    color: 'Белый/Графит',
    dimensions: '2400x1800x600 мм',
    hardware: 'Blum, Hettich',
    warranty: '2 года',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 1, product_id: 1, image_path: '/lovable-uploads/kitchen1_main.jpg', is_primary: true, created_at: new Date().toISOString() },
      { id: 2, product_id: 1, image_path: '/lovable-uploads/kitchen1_2.jpg', is_primary: false, created_at: new Date().toISOString() },
      { id: 3, product_id: 1, image_path: '/lovable-uploads/kitchen1_3.jpg', is_primary: false, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 2,
    name: 'Кухня "Классика"',
    price: 95000,
    category: 'Кухни',
    description: 'Классическая кухня в светлых тонах с деревянными элементами. Идеально подходит для тех, кто ценит традиции.',
    material: 'МДФ, массив дерева',
    color: 'Бежевый/Коричневый',
    dimensions: '2600x2000x600 мм',
    hardware: 'Blum, Boyard',
    warranty: '3 года',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 4, product_id: 2, image_path: '/lovable-uploads/kitchen2_main.jpg', is_primary: true, created_at: new Date().toISOString() },
      { id: 5, product_id: 2, image_path: '/lovable-uploads/kitchen2_2.jpg', is_primary: false, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 3,
    name: 'Шкаф-купе "Комфорт"',
    price: 45000,
    category: 'Шкафы',
    description: 'Вместительный шкаф-купе с раздвижными дверями. Оптимальное решение для спальни или прихожей.',
    material: 'ЛДСП, зеркало',
    color: 'Венге/Дуб сонома',
    dimensions: '2000x1800x600 мм',
    hardware: 'Hettich, Valcomp',
    warranty: '2 года',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 6, product_id: 3, image_path: '/lovable-uploads/wardrobe1_main.jpg', is_primary: true, created_at: new Date().toISOString() },
      { id: 7, product_id: 3, image_path: '/lovable-uploads/wardrobe1_2.jpg', is_primary: false, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 4,
    name: 'Стол "Минимал"',
    price: 18000,
    category: 'Столы',
    description: 'Современный обеденный стол в минималистичном стиле. Подходит для кухни или столовой.',
    material: 'МДФ, металл',
    color: 'Белый/Черный',
    dimensions: '1200x800x750 мм',
    hardware: 'Hettich',
    warranty: '1 год',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 8, product_id: 4, image_path: '/lovable-uploads/table1_main.jpg', is_primary: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 5,
    name: 'Стул "Эрго"',
    price: 5500,
    category: 'Стулья',
    description: 'Эргономичный стул с мягким сиденьем и спинкой. Обеспечивает комфорт при длительном сидении.',
    material: 'Экокожа, металл',
    color: 'Черный/Серый',
    dimensions: '450x450x950 мм',
    hardware: 'Boyard',
    warranty: '1 год',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 9, product_id: 5, image_path: '/lovable-uploads/chair1_main.jpg', is_primary: true, created_at: new Date().toISOString() }
    ]
  },
  {
    id: 6,
    name: 'Кровать "Релакс"',
    price: 32000,
    category: 'Кровати',
    description: 'Удобная двуспальная кровать с мягким изголовьем. Создана для комфортного и здорового сна.',
    material: 'ЛДСП, текстиль',
    color: 'Бежевый/Коричневый',
    dimensions: '2000x1600x450 мм',
    hardware: 'Блюм',
    warranty: '2 года',
    created_at: new Date().toISOString(),
    product_images: [
      { id: 10, product_id: 6, image_path: '/lovable-uploads/bed1_main.jpg', is_primary: true, created_at: new Date().toISOString() },
      { id: 11, product_id: 6, image_path: '/lovable-uploads/bed1_2.jpg', is_primary: false, created_at: new Date().toISOString() }
    ]
  }
];

// Моковые данные для заказов
export const ordersMockData: Order[] = [
  {
    id: 1,
    user_name: 'Иван Иванов',
    user_email: 'ivan@example.com',
    user_phone: '+7 (999) 123-45-67',
    delivery_address: 'г. Москва, ул. Пушкина, д. 10, кв. 5',
    total_amount: 75000,
    status: 'В обработке',
    created_at: '2023-05-15T10:30:00Z',
    order_details: { comment: 'Доставка в выходной день' },
    order_items: [
      {
        id: 1,
        order_id: 1,
        product_id: 1,
        quantity: 1,
        price_at_time: 75000,
        created_at: '2023-05-15T10:30:00Z',
        product: productsMockData[0]
      }
    ]
  },
  {
    id: 2,
    user_name: 'Анна Смирнова',
    user_email: 'anna@example.com',
    user_phone: '+7 (999) 987-65-43',
    delivery_address: 'г. Санкт-Петербург, Невский пр., д. 20, кв. 15',
    total_amount: 50500,
    status: 'Доставлен',
    created_at: '2023-05-10T14:15:00Z',
    order_details: { comment: 'Звонить за час до доставки' },
    order_items: [
      {
        id: 2,
        order_id: 2,
        product_id: 5,
        quantity: 1,
        price_at_time: 5500,
        created_at: '2023-05-10T14:15:00Z',
        product: productsMockData[4]
      },
      {
        id: 3,
        order_id: 2,
        product_id: 4,
        quantity: 1,
        price_at_time: 45000,
        created_at: '2023-05-10T14:15:00Z',
        product: productsMockData[3]
      }
    ]
  }
];

// Моковые данные для заявок на замер
export const measurementRequestsMockData: MeasurementRequest[] = [
  {
    id: 1,
    name: 'Сергей Петров',
    email: 'sergey@example.com',
    phone: '+7 (999) 111-22-33',
    address: 'г. Москва, ул. Ленина, д. 5, кв. 10',
    furniture_type: 'Кухня',
    preferred_date: '2023-06-01',
    preferred_time: '10:00-14:00',
    additional_notes: 'Кухня с островом, нужна консультация по планировке',
    status: 'Новая',
    created_at: '2023-05-20T09:00:00Z'
  },
  {
    id: 2,
    name: 'Мария Иванова',
    email: 'maria@example.com',
    phone: '+7 (999) 444-55-66',
    address: 'г. Москва, Кутузовский пр., д. 25, кв. 42',
    furniture_type: 'Шкаф-купе',
    preferred_date: '2023-06-05',
    preferred_time: '14:00-18:00',
    additional_notes: 'Шкаф в спальню, нужно обсудить наполнение',
    status: 'Выполнено',
    created_at: '2023-05-18T11:30:00Z'
  }
];

// Моковые данные для контактных сообщений
export const contactMessagesMockData: ContactMessage[] = [
  {
    id: 1,
    name: 'Дмитрий Сидоров',
    email: 'dmitry@example.com',
    phone: '+7 (999) 777-88-99',
    message: 'Интересует информация о сроках изготовления кухни',
    created_at: '2023-05-22T16:45:00Z'
  },
  {
    id: 2,
    name: 'Екатерина Новикова',
    email: 'ekaterina@example.com',
    phone: '+7 (999) 123-45-67',
    message: 'Можно ли заказать столешницу отдельно от кухни? И какие материалы используются?',
    created_at: '2023-05-21T10:20:00Z'
  }
];
