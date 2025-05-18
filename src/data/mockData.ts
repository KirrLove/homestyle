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

// Определение дополнительных типов для новых продуктов
export interface LocalProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  material: string;
  style: string;
  features: string[];
  specifications: {
    Размеры: {
      [key: string]: string;
    },
    Материалы: {
      [key: string]: string;
    },
    Гарантия: string;
  };
  sink_options?: {
    sinks: {
      [key: string]: {
        colors: string[];
        features: string[];
        materials: string[];
        base_price: number;
      }
    }
  };
  hardware_options?: {
    brands: {
      [key: string]: {
        price: number;
        features: string[];
      }
    }
  };
}

// Изображения для продуктов
const productImageData = [
  // Кухня 1 (Сатуко)
  {
    id: 1,
    image_url: "https://hoff.ru/upload/iblock/c22/ka7sn801ywbfajeiwuwrqh7kpofwryo7.jpg",
    product_id: 1
  },
  {
    id: 23,
    image_url: "https://hoff.ru/upload/iblock/e45/48unmyq78ks45xfcwbulq6zpg5jsxd25.jpg",
    product_id: 1
  },
  {
    id: 24,
    image_url: "https://hoff.ru/upload/iblock/f1d/b0mpu2495vn2hj3l2i06ucyi2d3upi5c.jpg",
    product_id: 1
  },
  
  // Кухня 2 (Греджи)
  {
    id: 2,
    image_url: "https://hoff.ru/upload/iblock/aa0/aa0f0ca8be4c5c1e5c15914fe8a2d5b9.jpg",
    product_id: 2
  },
  {
    id: 3,
    image_url: "https://hoff.ru/upload/iblock/4d6/4d63d29d8a5fcf5627973a370a924ee6.jpg",
    product_id: 2
  },
  {
    id: 10,
    image_url: "https://hoff.ru/upload/iblock/bf3/bf38457534ee255eb803d27ab7fe26fa.jpg",
    product_id: 2
  },
  {
    id: 11,
    image_url: "https://hoff.ru/upload/iblock/cc7/cc7db4a7d8f7a26c8128aca180496666.jpg",
    product_id: 2
  },
  {
    id: 12,
    image_url: "https://hoff.ru/upload/iblock/08d/08d4594b03d2cdbec13d5a8b1dcd2d78.jpg",
    product_id: 2
  },
  {
    id: 13,
    image_url: "https://hoff.ru/upload/iblock/6d4/6d42010f9b2122c3148c3d5ad50df3e9.jpg",
    product_id: 2
  },
  {
    id: 14,
    image_url: "https://hoff.ru/upload/iblock/e90/e907ea731e54e04b2cea77f43a1ac1a6.jpg",
    product_id: 2
  },
  
  // Кухня 3 (Вайтлайн)
  {
    id: 4,
    image_url: "https://hoff.ru/upload/iblock/14e/14eef8947ee3fdbfeebd9956572c95ac.jpg",
    product_id: 3
  },
  {
    id: 5,
    image_url: "https://hoff.ru/upload/iblock/0cc/0ccd978390cfd03e466c596bd138c0bb.jpg",
    product_id: 3
  },
  {
    id: 6,
    image_url: "https://hoff.ru/upload/iblock/268/26845f69eb906aa5c1c1a02ce205aff3.jpg",
    product_id: 3
  },
  {
    id: 7,
    image_url: "https://hoff.ru/upload/iblock/f71/f71b566786e383f460901b6cebb20d74.jpg",
    product_id: 3
  },
  {
    id: 8,
    image_url: "https://hoff.ru/upload/iblock/3f4/3f419a276f4cd8bf3f6f428c8133313c.jpg",
    product_id: 3
  },
  {
    id: 9,
    image_url: "https://hoff.ru/upload/iblock/173/173da1e7b174622ed51cfac69e8100a5.jpg",
    product_id: 3
  },
  
  // Кухня 4 (Минимал)
  {
    id: 25,
    image_url: "https://hoff.ru/upload/iblock/01f/01f47759cd177ab1ab366c53eccbcef5.jpg",
    product_id: 4
  },
  {
    id: 26,
    image_url: "https://hoff.ru/upload/iblock/077/077e8766375b12c863f19a5d555720bd.jpg",
    product_id: 4
  },
  {
    id: 27,
    image_url: "https://hoff.ru/upload/iblock/e2b/e2b9f5107b8e4a53cba019eed1b59bf8.jpg",
    product_id: 4
  },
  
  // Кухня 5 (П-образная классика)
  {
    id: 15,
    image_url: "https://hoff.ru/upload/iblock/9b8/9b818b665a5ba6d3df7fc4607c9feeab.jpg",
    product_id: 5
  },
  {
    id: 16,
    image_url: "https://hoff.ru/upload/iblock/120/1204f77f2b5983d7634aba8c71f0eba6.jpg",
    product_id: 5
  },
  {
    id: 17,
    image_url: "https://hoff.ru/upload/hoff_resize/upload/iblock/e54/wsghsolceixopj7cutqmkrvb3htnxjd1.jpeg/900x600_75.webp",
    product_id: 5
  },
  
  // Кухня 6 (Островная Люкс)
  {
    id: 19,
    image_url: "https://cdn.nonton.ru/webp/5e3/5e32d26ea82bed2ad03830f6a0e7283c/CHelsi_kukhnya_belaya.jpeg.webp",
    product_id: 6
  },
  {
    id: 20,
    image_url: "https://hoff.ru/upload/iblock/e0a/74e2m0r6xzc6vqm3ffmkllfa7hlbo0um.jpg",
    product_id: 6
  },
  {
    id: 21,
    image_url: "https://hoff.ru/upload/iblock/bbd/7pz1g56iafqhr1y8qx3viunylefx0ai2.jpg",
    product_id: 6
  },
  {
    id: 22,
    image_url: "https://hoff.ru/upload/iblock/e3c/xniz8hc129oz4v2e6a0stky8e7jb20zu.jpg",
    product_id: 6
  },
  
  // Кухня 7 (Лофт Индастриал)
  {
    id: 28,
    image_url: "https://hoff.ru/upload/iblock/011/8h8nq06tnwmb38fhcyq7sf84ii6v9ewe.jpg",
    product_id: 7
  },
  {
    id: 29,
    image_url: "https://hoff.ru/upload/iblock/373/c6s7g81vg0bbcg4wr0h5bx40g5wqi9wm.jpg",
    product_id: 7
  },
  {
    id: 30,
    image_url: "https://hoff.ru/upload/iblock/e5e/v6wlx4fty8pw7w591jyh7nv8i55woj1h.jpg",
    product_id: 7
  },
  {
    id: 31,
    image_url: "https://hoff.ru/upload/iblock/677/2oueeawto6z9tg0umjcv3hhqu2rp287x.jpg",
    product_id: 7
  },
  {
    id: 32,
    image_url: "https://hoff.ru/upload/iblock/009/mp1s9seyclb4tiovx6u4zwa97o16hxy0.jpg",
    product_id: 7
  },
  
  // Кухня 8 (Скандинавский Стиль)
  {
    id: 33,
    image_url: "https://hoff.ru/upload/iblock/3a9/m9vz1exx2trgtp8w7se5ssxipdufuwkc.jpg",
    product_id: 8
  },
  {
    id: 34,
    image_url: "https://hoff.ru/upload/iblock/a56/w5d00gq8lz1v1d9kj1chle2cwxxeqg06.jpg",
    product_id: 8
  },
  {
    id: 35,
    image_url: "https://hoff.ru/upload/iblock/82b/b9plqj257i31v1t1siiwej8wmx6soc1g.jpg",
    product_id: 8
  },
  
  // Кухня 9 (Неоклассика)
  {
    id: 36,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/3d0ee8fb5c5ab3075bd60414bf4e360d.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 37,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/b59759df85c6dfa73654eb819ed8e227.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 38,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/57f8c8e8ebe1312137dbb06ac3efda0e.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 40,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/322f801a2fe190cd5a3dffa6c4bfbd2b.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 41,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/aa21a27371c4b573bffac628024b226f.jpg/666x444_85.webp",
    product_id: 9
  },
  {
    id: 42,
    image_url: "https://hoff.ru/upload/hoff_resize/hoff-images/274/239/9/20f686fcab7100d33520bc62b423dd8d.jpg/666x444_85.webp",
    product_id: 9
  },
  
  // Кухня 10 (Урбан)
  {
    id: 43,
    image_url: "https://hoff.ru/upload/iblock/fae/gkvq0ottlynij4yfqvsa7n0lq11pp1pz.jpg",
    product_id: 10
  },
  {
    id: 44,
    image_url: "https://hoff.ru/upload/iblock/f81/i0s0a9xeoed1cwcskof167mx0jywufrm.jpg",
    product_id: 10
  },
  
  // Изображения для product_id = 0 (Модерна)
  {
    id: 18,
    image_url: "https://hoff.ru/upload/iblock/f20/0jop8zoiztmh33c7h71vytwbbwxr5n96.jpg",
    product_id: 0
  },
  
  // Добавим изображения для product_id = 11 (Рустик)
  {
    id: 45,
    image_url: "https://cdn.nonton.ru/webp/8e9/8e9a3e91ac0e3e961b75a80f441c9fbf/Oliviya_3_0kh1_8_Kukhnya_uglovaya_SHarli_pink_01_001.jpeg.webp",
    product_id: 11
  },
  {
    id: 46,
    image_url: "https://cdn.nonton.ru/webp/eab/eabdbf19f7f7a50851a8f171eb6201f2/Oliviya_3_0kh1_8_Kukhnya_uglovaya_SHarli_pink_zakr.jpeg.webp",
    product_id: 11
  },
  
  // Добавим изображения для product_id = 12 (Эко-Стиль)
  {
    id: 47,
    image_url: "https://cdn.nonton.ru/webp/5e3/5e32d26ea82bed2ad03830f6a0e7283c/CHelsi_kukhnya_belaya.jpeg.webp",
    product_id: 12
  },
];

// Преобразуем данные в формат, необходимый для нашего приложения
export const productsMockData: Product[] = [
  {
    id: 1,
    name: 'Сатуко',
    price: 77100,
    category: 'Кухни',
    description: 'Современная кухня в японском стиле с минималистичным дизайном и функциональными решениями',
    material: 'АГТ панели',
    color: 'Белый/Серый',
    dimensions: 'Стандарт',
    hardware: 'Blum, Hettich',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 1).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 1, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 2,
    name: 'Греджи',
    price: 40820,
    category: 'Кухни',
    description: 'Элегантная кухня с современными акцентами и продуманной эргономикой пространства',
    material: 'МДФ пленка',
    color: 'Бежевый/Коричневый',
    dimensions: 'Стандарт',
    hardware: 'Hettich',
    warranty: '3 года',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 2).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 2, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 3,
    name: 'Вайтлайн',
    price: 48560,
    category: 'Кухни',
    description: 'Светлая кухня в скандинавском стиле с акцентом на простоту и функциональность',
    material: 'Эмаль',
    color: 'Белый',
    dimensions: 'Стандарт',
    hardware: 'Blum',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 3).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 4, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 4,
    name: 'Минимал',
    price: 52300,
    category: 'Кухни',
    description: 'Минималистичная кухня в современном стиле с чистыми линиями и максимальной функциональностью',
    material: 'Пластик',
    color: 'Белый/Серый',
    dimensions: 'Стандарт',
    hardware: 'Grass',
    warranty: '4 года',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 4).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 25, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 5,
    name: 'П-образная классика',
    price: 68500,
    category: 'Кухни',
    description: 'Функциональная П-образная кухня с классическими элементами и обилием пространства для хранения',
    material: 'МДФ эмаль',
    color: 'Бежевый/Коричневый',
    dimensions: 'П-образная планировка',
    hardware: 'Blum',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 5).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 15, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 6,
    name: 'Островная Люкс',
    price: 92800,
    category: 'Кухни',
    description: 'Просторная кухня с островом, сочетающая функциональность и изысканный дизайн',
    material: 'Массив дерева',
    color: 'Белый/Древесный',
    dimensions: 'Островная планировка',
    hardware: 'Hafele',
    warranty: '7 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 6).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 19, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 7,
    name: 'Лофт Индастриал',
    price: 58900,
    category: 'Кухни',
    description: 'Брутальная кухня в стиле лофт с индустриальными элементами и современной функциональностью',
    material: 'МДФ + металл',
    color: 'Черный/Серый',
    dimensions: 'Стандарт',
    hardware: 'GTV',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 7).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 28, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 8,
    name: 'Скандинавский Стиль',
    price: 45800,
    category: 'Кухни',
    description: 'Светлая просторная кухня в скандинавском стиле с натуральными материалами и чистыми линиями',
    material: 'Массив сосны + МДФ',
    color: 'Белый/Натуральное дерево',
    dimensions: 'Стандарт',
    hardware: 'IKEA',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 8).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 33, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 0,
    name: 'Модерна',
    price: 38900,
    category: 'Кухни',
    description: 'Компактная современная кухня с инновационными решениями для малогабаритных помещений',
    material: 'ЛДСП с 3D-эффектом',
    color: 'Белый/Графит',
    dimensions: 'Компактная',
    hardware: 'GTV',
    warranty: '2 года',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 0).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 18, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 9,
    name: 'Неоклассика',
    price: 63500,
    category: 'Кухни',
    description: 'Элегантная кухня, сочетающая классические формы с современной функциональностью',
    material: 'МДФ с патиной',
    color: 'Светлый/Бежевый',
    dimensions: 'Стандарт',
    hardware: 'Blum',
    warranty: '5 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 9).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 36, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 10,
    name: 'Урбан',
    price: 55200,
    category: 'Кухни',
    description: 'Стильная городская кухня в стиле хай-тек с глянцевыми поверхностями и строгим дизайном',
    material: 'Акрил глянец',
    color: 'Серый/Черный',
    dimensions: 'Стандарт',
    hardware: 'Hettich',
    warranty: '3 года',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 10).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 43, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 11,
    name: 'Рустик',
    price: 72800,
    category: 'Кухни',
    description: 'Деревенская кухня с натуральными материалами и уютной атмосферой',
    material: 'Массив дуба',
    color: 'Темное дерево',
    dimensions: 'Стандарт',
    hardware: 'Ручная работа',
    warranty: '10 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 11).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 45, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
  },
  {
    id: 12,
    name: 'Эко-Стиль',
    price: 67500,
    category: 'Кухни',
    description: 'Экологичная кухня из натуральных материалов с акцентом на устойчивое развитие',
    material: 'Бамбук и переработанные материалы',
    color: 'Натуральный/Зеленый',
    dimensions: 'Стандарт',
    hardware: 'Ecosmart',
    warranty: '7 лет',
    created_at: new Date().toISOString(),
    product_images: productImageData.filter(img => img.product_id === 12).map(img => ({
      id: img.id,
      product_id: img.product_id,
      image_path: img.image_url,
      is_primary: img.id === 47, // Первое фото - основное
      created_at: new Date().toISOString()
    }))
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
