import SectionTitle from "../components/shared/SectionTitle";
import { CheckCircle, Award, Users, Factory, Target, Heart, Clock, Shield, Wrench, Trophy, Lightbulb, ThumbsUp } from "lucide-react";

const stats = [
  { label: "Лет на рынке", value: "8+" },
  { label: "Довольных клиентов", value: "1000+" },
  { label: "Реализованных проектов", value: "2500+" },
  { label: "Городов доставки", value: "85+" },
];

const values = [
  {
    icon: Heart,
    title: "Качество",
    description: "Используем только премиальные материалы и фурнитуру европейских производителей",
  },
  {
    icon: Award,
    title: "Профессионализм",
    description: "Команда опытных дизайнеров и мастеров с многолетним стажем работы",
  },
  {
    icon: Users,
    title: "Клиентоориентированность",
    description: "Индивидуальный подход к каждому клиенту и проекту любой сложности",
  },
  {
    icon: Factory,
    title: "Производство",
    description: "Собственные производственные мощности с современным оборудованием",
  },
  {
    icon: Target,
    title: "Точность",
    description: "Соблюдение всех размеров и сроков изготовления мебели",
  },
  {
    icon: Shield,
    title: "Надежность",
    description: "Гарантия качества и долговечность всех изделий",
  }
];

const team = [
  {
    name: "Алексей Иванов",
    role: "Основатель и главный дизайнер",
    experience: "12 лет опыта",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    description: "Создает уникальные дизайнерские решения"
  },
  {
    name: "Мария Петрова",
    role: "Технический директор",
    experience: "10 лет опыта",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80",
    description: "Контролирует качество производства"
  },
  {
    name: "Сергей Сидоров",
    role: "Мастер-краснодеревщик",
    experience: "15 лет опыта",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    description: "Воплощает идеи в жизнь"
  }
];

const achievements = [
  {
    icon: Trophy,
    title: "Лучшая мебельная компания 2023",
    description: "Награда от ассоциации производителей мебели"
  },
  {
    icon: Lightbulb,
    title: "Инновации в производстве",
    description: "Внедрение современных технологий 3D-моделирования"
  },
  {
    icon: ThumbsUp,
    title: "98% довольных клиентов",
    description: "По результатам независимого исследования"
  }
];

const timeline = [
  {
    year: "2015",
    title: "Основание компании",
    description: "Начали работу как небольшая мастерская в стиле лофт"
  },
  {
    year: "2017",
    title: "Расширение производства",
    description: "Открыли собственный цех площадью 500 кв.м"
  },
  {
    year: "2019",
    title: "Новые технологии",
    description: "Внедрили 3D-проектирование и CNC-станки"
  },
  {
    year: "2021",
    title: "Федеральная сеть",
    description: "Начали работу по всей России"
  },
  {
    year: "2023",
    title: "Лидер рынка",
    description: "Стали одной из ведущих компаний в регионе"
  }
];

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:h-[70vh] flex items-center py-16 md:py-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://itrack.ru/upload/iblock/49d/ruez261ytj00rpfn5l3sgva4fhot13kp.png"
          alt="О компании"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6">
            О компании HomeStyle
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mb-6 md:mb-8">
            Создаем уникальную мебель и воплощаем мечты в реальность с 2015 года
          </p>
          <div className="flex flex-wrap gap-3 md:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-accent flex-shrink-0" />
              <span className="text-sm md:text-lg">Собственное производство</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-accent flex-shrink-0" />
              <span className="text-sm md:text-lg">Премиальные материалы</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-accent flex-shrink-0" />
              <span className="text-sm md:text-lg">Индивидуальный дизайн</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <SectionTitle
                title="Наша история"
                subtitle="Путь от небольшой мастерской к лидеру рынка"
                centered={false}
              />
              <p className="text-lg mb-6">
                HomeStyle начала свой путь в 2015 году как небольшая мастерская по
                производству мебели в стиле лофт. Основатель компании, Алексей Иванов,
                всегда мечтал создавать мебель, которая будет не просто функциональной,
                но и станет произведением искусства.
              </p>
              <p className="text-lg mb-6">
                За годы работы мы выросли в крупное производство с собственными
                производственными мощностями, современным оборудованием и командой
                профессионалов. Но главное – мы сохранили индивидуальный подход
                к каждому клиенту и проекту.
              </p>
              <p className="text-lg">
                Сегодня HomeStyle – это не просто мебельная компания. Это команда
                единомышленников, которые создают пространства для жизни, работы
                и отдыха, воплощая самые смелые дизайнерские идеи наших клиентов.
              </p>
            </div>
            <div className="animate-fade-up grid grid-cols-2 gap-4">
              <img
                src="https://cdn1.tenchat.ru/static/vbc-gostinder/2025-06-09/68a71994-8ee5-4e3f-824b-d57dc1c82718.jpg?width=2094&height=1179&fmt=webp"
                alt="История компании"
                className="rounded-lg shadow-xl"
              />
              <img
                src="https://www.stanki.ru/images/gefest_06.jpg"
                alt="Производство"
                className="rounded-lg shadow-xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container px-4">
          <SectionTitle
            title="Этапы развития"
            subtitle="Ключевые моменты нашего роста"
          />
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-accent"></div>
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} pl-10 md:pl-0`}>
                    <div className="card p-4 md:p-6">
                      <div className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">{item.year}</div>
                      <h3 className="text-base md:text-xl font-heading font-semibold mb-1 md:mb-2">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-2.5 md:left-1/2 md:transform md:-translate-x-1/2 z-10 w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full border-2 md:border-4 border-white shadow-lg"></div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 hero-gradient text-white">
        <div className="container px-4">
          <SectionTitle
            title="Наши достижения в цифрах"
            subtitle="Результаты, которыми мы гордимся"
            className="text-white"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-accent mb-2 md:mb-4">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Наши ценности"
            subtitle="Принципы, которыми мы руководствуемся в работе"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 accent-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Наша команда"
            subtitle="Профессионалы, которые создают вашу мебель"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-6 text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.experience}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Наши достижения"
            subtitle="Признание профессионального сообщества"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <achievement.icon className="w-16 h-16 mx-auto mb-6 text-accent" />
                <h3 className="font-heading font-semibold text-lg mb-4">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Современное производство
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Наше производство оснащено новейшим оборудованием от ведущих
                европейских производителей. Мы используем CNC-станки для точной
                обработки деталей, современные покрасочные камеры и системы
                контроля качества.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Технологии</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>CNC-обработка</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>3D-моделирование</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>Лазерная резка</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Материалы</h4>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>Массив дерева</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>ЛДСП премиум класса</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="text-accent w-4 h-4" />
                      <span>Фурнитура Blum</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://www.stanki.ru/images/gefest_06.jpg"
                  alt="Производство"
                  className="rounded-lg shadow-xl"
                />
                <img
                  src="https://avatars.mds.yandex.net/i?id=536d9d9a1d7a03e7e7b470d25916f661_l-5231735-images-thumbs&n=13"
                  alt="Оборудование"
                  className="rounded-lg shadow-xl mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <img
                src="https://i.pinimg.com/originals/02/6e/52/026e52ef380a588d77b8f60b4a039a3d.jpg"
                alt="Контроль качества"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-fade-up">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Контроль качества
              </h2>
              <p className="text-lg mb-6">
                Каждое изделие проходит многоступенчатый контроль качества.
                От выбора материалов до финальной сборки – мы контролируем
                каждый этап производства.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Входной контроль материалов</h4>
                    <p className="text-muted-foreground text-sm">Проверка качества всех поступающих материалов</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Контроль производства</h4>
                    <p className="text-muted-foreground text-sm">Проверка на каждом этапе изготовления</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Финальная проверка</h4>
                    <p className="text-muted-foreground text-sm">Контроль готового изделия перед отгрузкой</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
