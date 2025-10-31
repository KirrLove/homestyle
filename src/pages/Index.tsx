import { ArrowRight, Truck, Clock, Wrench, Shield, Star, Users, Ruler, CheckCircle2, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/shared/SectionTitle";
import ProductCard from "../components/shared/ProductCard";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import productionImage from "@/assets/production.jpg";
import happyClients from "@/assets/happy-clients.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 z-10" />
        <img
          src={heroKitchen}
          alt="Современная премиальная кухня HomeStyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white px-4">
          <div className="inline-block mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <Award className="w-3 h-3 md:w-4 md:h-4 inline mr-1.5 md:mr-2 text-accent" />
            <span className="text-accent font-semibold text-xs md:text-base">Собственное производство в Москве</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 animate-fade-up leading-tight">
            Мебель мечты для вашей новой квартиры
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl animate-fade-up leading-relaxed">
            <strong className="text-white">Готово за 7-10 дней.</strong> Кухни, шкафы-купе и гардеробные точно по вашим размерам. Изготавливаем на собственном производстве – контролируем качество на каждом этапе.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Link to="/custom-furniture" className="btn-primary inline-flex items-center justify-center space-x-2 animate-fade-up text-sm md:text-base whitespace-nowrap hover:scale-105 transition-transform">
              <span>Бесплатный замер</span>
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
            <Link to="/catalog" className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold inline-flex items-center justify-center space-x-2 border border-white/30 text-sm md:text-base whitespace-nowrap">
              <span>Примеры работ</span>
              <ArrowRight size={18} className="md:w-5 md:h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-md">
            <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent">850+</div>
              <div className="text-[10px] sm:text-xs text-white/80">проектов</div>
            </div>
            <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent">7-10</div>
              <div className="text-[10px] sm:text-xs text-white/80">дней</div>
            </div>
            <div className="text-center p-2 md:p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-accent">24 мес</div>
              <div className="text-[10px] sm:text-xs text-white/80">гарантия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-accent">Нас выбирают москвичи</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Более 850 квартир с нашей мебелью</h2>
              <p className="text-muted-foreground">Каждый третий клиент приходит по рекомендации</p>
            </div>
            <div className="flex-shrink-0 order-1 md:order-2">
              <img 
                src={happyClients} 
                alt="Довольные клиенты HomeStyle с новой мебелью" 
                className="w-full md:w-80 lg:w-96 h-56 sm:h-64 md:h-72 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container px-4">
          <SectionTitle
            title="Почему нам доверяют"
            subtitle="Собственное производство и профессиональная команда для идеального результата"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="premium-card text-center animate-fade-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
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

      {/* Production Section */}
      <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        </div>
        <div className="container relative z-10 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4 md:mb-6 border border-accent/30">
                <Award className="h-4 w-4 text-accent" />
                <span className="text-xs md:text-sm font-medium">Собственное производство</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 md:mb-6">
                Контролируем качество на каждом этапе
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-white/90 leading-relaxed">
                Наше производство находится в Москве. Это значит, что мы полностью контролируем процесс – от закупки материалов до финальной сборки. Никаких посредников, только прямая работа с вами.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Современное оборудование</h4>
                    <p className="text-xs md:text-sm text-white/80">Точность распила до 0.1 мм на станках с ЧПУ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Проверенные материалы</h4>
                    <p className="text-xs md:text-sm text-white/80">Прямые поставки из Европы без переплат</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1 text-sm md:text-base">Опытные мастера</h4>
                    <p className="text-xs md:text-sm text-white/80">Каждый специалист работает с нами более 5 лет</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-up order-1 lg:order-2">
              <img 
                src={productionImage} 
                alt="Производство мебели HomeStyle в Москве" 
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
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
