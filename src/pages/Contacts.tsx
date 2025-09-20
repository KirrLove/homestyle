import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Calendar, Award } from "lucide-react";
import SectionTitle from "../components/shared/SectionTitle";
import ContactForm from "../components/shared/ContactForm";

const officeInfo = [
  {
    title: "Главный офис",
    address: "г. Кузнецк, ул. Центральная, 15",
    phone: "+7 (977) 044-03-44",
    email: "homestyle158@gmail.com",
    hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    title: "Производство",
    address: "г. Кузнецк, Промышленная зона",
    phone: "+7 (977) 044-03-45",
    email: "production@homestyle158.ru",
    hours: "Пн-Пт: 8:00-17:00",
    image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80"
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: "Позвоните нам",
    description: "Быстрая консультация по телефону",
    info: "+7 (977) 044-03-44",
    action: "tel:+79770440344"
  },
  {
    icon: Mail,
    title: "Напишите письмо",
    description: "Подробная консультация по email",
    info: "homestyle158@gmail.com",
    action: "mailto:homestyle158@gmail.com"
  },
  {
    icon: MessageCircle,
    title: "Онлайн-чат",
    description: "Мгновенные ответы в мессенджерах",
    info: "WhatsApp, Telegram",
    action: "#"
  },
  {
    icon: Calendar,
    title: "Запись на встречу",
    description: "Личная консультация в офисе",
    info: "По предварительной записи",
    action: "#"
  }
];

const advantages = [
  {
    icon: Users,
    title: "Персональный менеджер",
    description: "За каждым клиентом закрепляется персональный менеджер"
  },
  {
    icon: Clock,
    title: "Быстрый ответ",
    description: "Отвечаем на обращения в течение 30 минут"
  },
  {
    icon: Award,
    title: "Гарантия качества",
    description: "Полная гарантия на все виды работ и материалы"
  }
];

const faqs = [
  {
    question: "Как долго изготавливается мебель на заказ?",
    answer: "Срок изготовления составляет от 14 до 30 рабочих дней в зависимости от сложности проекта и загруженности производства."
  },
  {
    question: "Предоставляете ли вы гарантию?",
    answer: "Да, мы предоставляем гарантию на всю продукцию от 12 месяцев. На фурнитуру действует расширенная гарантия до 5 лет."
  },
  {
    question: "Возможна ли доставка в другие города?",
    answer: "Да, мы осуществляем доставку по всей России. Стоимость доставки рассчитывается индивидуально в зависимости от расстояния и объема заказа."
  },
  {
    question: "Можно ли посмотреть образцы материалов?",
    answer: "Конечно! В нашем шоу-руме представлены образцы всех материалов, фурнитуры и готовые изделия. Также возможен выезд с образцами к клиенту."
  }
];

const Contacts = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Контакты"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Мы всегда готовы ответить на ваши вопросы и помочь с выбором мебели
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Способы связи"
            subtitle="Выберите удобный для вас способ общения"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                <p className="text-accent font-medium">{method.info}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Наши офисы"
            subtitle="Приезжайте к нам в гости"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeInfo.map((office, index) => (
              <div
                key={index}
                className="card overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={office.image}
                  alt={office.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">{office.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} className="text-accent hover:text-accent/80 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-accent hover:text-accent/80 transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 animate-fade-up">
              <SectionTitle
                title="Напишите нам"
                subtitle="Заполните форму, и мы свяжемся с вами в ближайшее время"
                centered={false}
              />
              <ContactForm />
            </div>

            <div className="animate-fade-up">
              <h3 className="text-2xl font-heading font-bold mb-6">Почему выбирают нас?</h3>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{advantage.title}</h4>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                <h4 className="font-semibold text-lg mb-3">Режим работы</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="font-medium">Выходной</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Часто задаваемые вопросы"
            subtitle="Ответы на популярные вопросы наших клиентов"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Как нас найти"
            subtitle="Мы находимся в центре города, удобная транспортная доступность"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-[400px] bg-secondary rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <p className="text-muted-foreground mb-2">Здесь будет размещена карта</p>
                    <p className="text-sm text-muted-foreground">г. Кузнецк, ул. Центральная, 15</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Как добраться</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">На автомобиле:</span>
                    <p className="text-muted-foreground">Парковка рядом с офисом, бесплатно</p>
                  </div>
                  <div>
                    <span className="font-medium">Общественный транспорт:</span>
                    <p className="text-muted-foreground">Автобусы №5, №12, остановка "Центральная"</p>
                  </div>
                  <div>
                    <span className="font-medium">Пешком:</span>
                    <p className="text-muted-foreground">5 минут от центральной площади</p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Ориентиры</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Рядом с торговым центром "Центральный"</li>
                  <li>• Напротив городского парка</li>
                  <li>• В здании с синей вывеской</li>
                  <li>• Вход со стороны ул. Центральная</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 accent-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нами любым удобным способом. Первая консультация бесплатно!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79770440344"
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Позвонить сейчас</span>
            </a>
            <a
              href="mailto:homestyle158@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Написать письмо</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;