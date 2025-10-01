import { ArrowRight, Truck, Clock, Wrench, Shield, Star, Users, Ruler, CheckCircle2 } from "lucide-react";
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
  },
  {
    id: 4,
    name: "Офисный стол Workspace",
    price: 32000,
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&q=80",
    category: "Столы",
  },
  {
    id: 5,
    name: "Кровать Comfort Plus",
    price: 65000,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80",
    category: "Кровати",
  },
  {
    id: 6,
    name: "Стул Nordic Style",
    price: 8500,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
    category: "Стулья",
  }
];

const benefits = [
  {
    icon: Wrench,
    title: "Производство в Москве",
    description: "Собственный цех с современным оборудованием — контролируем каждый этап",
  },
  {
    icon: Clock,
    title: "Готово за 7-10 дней",
    description: "Точные сроки благодаря отлаженному производству. Без задержек",
  },
  {
    icon: Truck,
    title: "Доставка и монтаж",
    description: "Бесплатная доставка по Москве и МО. Профессиональная установка",
  },
  {
    icon: Shield,
    title: "Гарантия 24 месяца",
    description: "Уверены в качестве — даем расширенную гарантию на всю мебель",
  }
];

const testimonials = [
  {
    name: "Анна М.",
    role: "ЖК «Символ», Москва",
    content: "Делали кухню в новостройку. Всё точно по размерам, привезли вовремя, установили за день. Живём уже год — никаких нареканий!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
  },
  {
    name: "Сергей и Ольга К.",
    role: "ЖК «Садовые кварталы», МО",
    content: "Заказывали шкаф-купе и гардеробную. Мастер приехал на замер в день обращения, через неделю привезли готовую мебель. Качество отличное!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Елена В.",
    role: "ЖК «Румянцево Парк»",
    content: "Искали мебель для детской. Посоветовали экологичные материалы, помогли с дизайном. Ребёнок в восторге, мы тоже!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80",
  },
  {
    name: "Михаил П.",
    role: "Новая Москва",
    content: "Обставляли всю трёшку мебелью от HomeStyle — кухня, два шкафа, гардеробная. Сделали единый дизайн, всё идеально сочетается.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  }
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:h-[80vh] flex items-center py-20 md:py-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
          alt="Современная мебель"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white px-4">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-xs md:text-base">Собственное производство в Москве</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 animate-fade-up leading-tight">
            Мебель для вашей новой квартиры под ключ
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl animate-fade-up leading-relaxed">
            От замера до установки за 10 дней. Изготавливаем кухни, шкафы-купе и гардеробные по вашим размерам на собственном производстве
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Link to="/custom-furniture" className="btn-primary inline-flex items-center justify-center space-x-2 animate-fade-up text-sm md:text-base whitespace-nowrap">
              <span>Заказать бесплатный замер</span>
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
            <Link to="/catalog" className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold inline-flex items-center justify-center space-x-2 border border-white/30 text-sm md:text-base whitespace-nowrap">
              <span>Смотреть работы</span>
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-6 text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span>Гарантия 24 месяца</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span>Доставка по Москве и МО</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
              <span>Монтаж в подарок</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Почему нам доверяют"
            subtitle="Делаем мебель, которая служит годами — без переплат и компромиссов"
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
                className="animate-fade-up hover:scale-105 transition-transform duration-300"
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
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 md:mb-6">
                Мебельная фабрика полного цикла
              </h2>
              <p className="text-base md:text-lg mb-3 md:mb-4 leading-relaxed">
                Работаем с 2015 года и знаем, как важна каждая деталь в новой квартире. 
                От первого эскиза до финальной установки — всё делаем сами на собственном производстве.
              </p>
              <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed opacity-90">
                Специализируемся на мебели для новостроек в Москве и области: 
                кухни с современными фасадами, шкафы-купе в любую нишу, функциональные гардеробные.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6">
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                  <span className="text-sm md:text-base">Точные размеры под ваше помещение</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                  <span className="text-sm md:text-base">Экологичные материалы</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                  <span className="text-sm md:text-base">Прозрачное ценообразование</span>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                  <span className="text-sm md:text-base">Договор и чек</span>
                </div>
              </div>
              <Link to="/about" className="btn-secondary inline-flex items-center space-x-2 text-sm md:text-base">
                <span>О фабрике подробнее</span>
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Link>
            </div>
            <div className="animate-fade-up">
              <img
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
                alt="О компании"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Мебель в реальных квартирах"
            subtitle="Отзывы тех, кто уже обставил свои новостройки"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card p-6 animate-fade-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 relative z-10">{testimonial.content}</p>
                <div className="flex items-center relative z-10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Всё под ключ"
            subtitle="От эскиза до установки — вам не придётся ни о чём беспокоиться"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Производство под ваши размеры</h3>
              <p className="text-muted-foreground">Изготавливаем точно по вашему помещению — никаких щелей и зазоров</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Доставка и монтаж</h3>
              <p className="text-muted-foreground">Доставим в удобное время и установим за один день</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-6 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Гарантия 24 месяца</h3>
              <p className="text-muted-foreground">Полная гарантия на мебель и фурнитуру. Быстро решим любой вопрос</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 hero-gradient text-white">
        <div className="container px-4">
          <SectionTitle
            title="Нам доверяют"
            subtitle="Цифры говорят лучше слов"
            className="text-white"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-accent">9 лет</div>
              <div className="text-xs sm:text-sm md:text-lg opacity-90">На рынке Москвы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-accent">1200+</div>
              <div className="text-xs sm:text-sm md:text-lg opacity-90">Довольных семей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-accent">2800+</div>
              <div className="text-xs sm:text-sm md:text-lg opacity-90">Единиц мебели изготовлено</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 text-accent">98%</div>
              <div className="text-xs sm:text-sm md:text-lg opacity-90">Клиентов рекомендуют нас</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Как мы работаем"
            subtitle="Простой и понятный процесс создания вашей мебели"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Звонок или заявка", desc: "Свяжитесь с нами любым удобным способом" },
              { step: "02", title: "Замер бесплатно", desc: "Мастер приедет в удобное время и снимет точные размеры" },
              { step: "03", title: "Производство 7-10 дней", desc: "Изготавливаем на собственном оборудовании в Москве" },
              { step: "04", title: "Доставка и монтаж", desc: "Привезём, установим и уберём за собой" }
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent w-6 h-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 accent-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Начните с бесплатного замера
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Мастер приедет в удобное время, снимет размеры, покажет образцы материалов и рассчитает точную стоимость. Всё бесплатно и без обязательств
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/custom-furniture" className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center space-x-2">
              <span>Заказать бесплатный замер</span>
              <Ruler size={20} />
            </Link>
            <Link to="/contacts" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold inline-flex items-center justify-center space-x-2">
              <span>Позвонить нам</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
