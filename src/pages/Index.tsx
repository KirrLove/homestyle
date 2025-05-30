import { ArrowRight, Truck, Clock, Wrench, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Кухонный гарнитур Modern",
    price: 85000,
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80",
    category: "Кухни",
  },
  {
    id: 2,
    name: "Шкаф-купе Premium",
    price: 45000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80",
    category: "Шкафы",
  },
  {
    id: 3,
    name: "Стеллаж Loft",
    price: 28000,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80",
    category: "Стеллажи",
  }
];

const benefits = [
  {
    icon: Wrench,
    title: "Собственное производство",
    description: "Полный контроль качества на всех этапах производства",
  },
  {
    icon: Clock,
    title: "Быстрое изготовление",
    description: "Срок производства от 5 до 10 рабочих дней",
  },
  {
    icon: Truck,
    title: "Доставка по России",
    description: "Организуем доставку в любой город России",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Предоставляем гарантию на всю продукцию",
  }
];

const testimonials = [
  {
    name: "Анна М.",
    role: "Владелец кафе",
    content: "Заказывали комплект мебели для нашего кафе. Качество превзошло все ожидания!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "Сергей К.",
    role: "Дизайнер интерьеров",
    content: "Регулярно сотрудничаем с HomeStyle. Всегда точные сроки и отличное качество.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  }
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
          alt="Современная мебель"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-up">
            Создаем мебель вашей мечты
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-up">
            Индивидуальный подход, современный дизайн и высокое качество
            исполнения
          </p>
          <Link to="/catalog" className="btn-primary inline-flex items-center space-x-2 animate-fade-up">
            <span>Смотреть каталог</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Почему выбирают нас"
            subtitle="Мы создаем мебель с заботой о наших клиентах"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Популярные модели"
            subtitle="Познакомьтесь с нашими бестселлерами"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/catalog" className="btn-secondary inline-flex items-center space-x-2">
              <span>Весь каталог</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                О компании HomeStyle
              </h2>
              <p className="text-lg mb-6">
                Мы специализируемся на производстве современной мебели в стиле
                лофт. Наша команда профессионалов создает уникальные предметы
                интерьера, которые сочетают в себе функциональность и стиль.
              </p>
              <Link to="/about" className="btn-secondary inline-flex items-center space-x-2">
                <span>Подробнее о нас</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="animate-fade-up">
              <img
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
                alt="О компании"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Отзывы клиентов"
            subtitle="Что говорят о нас наши клиенты"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-lg mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2500+</div>
              <div className="text-muted-foreground">Выполненных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">85+</div>
              <div className="text-muted-foreground">Городов доставки</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Готовы обсудить ваш проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчета стоимости
          </p>
          <Link to="/contacts" className="btn-secondary inline-flex items-center space-x-2">
            <span>Связаться с нами</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
