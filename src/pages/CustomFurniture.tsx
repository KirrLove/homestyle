import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import SectionTitle from "@/components/shared/SectionTitle";
import { Ruler, Clock, Palette, Shield, Wrench, CheckCircle2, Star } from "lucide-react";

const CustomFurniture = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    preferred_date: "",
    preferred_time: "",
    furniture_type: "",
    additional_notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Submitting measurement request:', formData);
      
      const { error } = await supabase
        .from('measurement_requests')
        .insert([formData]);

      if (error) throw error;

      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        preferred_date: "",
        preferred_time: "",
        furniture_type: "",
        additional_notes: "",
      });
    } catch (error) {
      console.error('Error submitting request:', error);
      toast.error("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const benefits = [
    {
      icon: Ruler,
      title: "Точные замеры",
      description: "Бесплатный выезд специалиста для замеров и консультации",
    },
    {
      icon: Clock,
      title: "Быстрое изготовление",
      description: "Срок изготовления от 14 дней",
    },
    {
      icon: Palette,
      title: "Индивидуальный дизайн",
      description: "Разработка уникального проекта под ваши потребности",
    },
    {
      icon: Wrench,
      title: "Профессиональный монтаж",
      description: "Установка мебели опытными специалистами",
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Гарантия на всю мебель от 12 месяцев",
    },
  ];

  const workProcess = [
    {
      step: 1,
      title: "Консультация и замер",
      description: "Бесплатный выезд специалиста для обсуждения проекта и точных замеров",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
    },
    {
      step: 2,
      title: "Проектирование",
      description: "Создание 3D-визуализации и детального проекта мебели",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
    },
    {
      step: 3,
      title: "Производство",
      description: "Изготовление мебели на современном оборудовании",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80",
    },
    {
      step: 4,
      title: "Монтаж",
      description: "Профессиональная установка мебели",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
    },
  ];

  const completedProjects = [
    {
      title: "Кухонный гарнитур",
      description: "Современная кухня со встроенной техникой",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
    },
    {
      title: "Шкаф-купе",
      description: "Вместительный шкаф с зеркальными дверями",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
    },
    {
      title: "Гардеробная",
      description: "Функциональная гардеробная комната",
      image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Анна М.",
      text: "Заказывали кухню, очень довольны результатом. Все сделали точно в срок и качественно.",
      rating: 5,
    },
    {
      name: "Сергей К.",
      text: "Отличная работа! Шкаф-купе превзошел все ожидания. Спасибо за профессионализм!",
      rating: 5,
    },
    {
      name: "Елена В.",
      text: "Благодарим за прекрасную гардеробную. Все продумано до мелочей.",
      rating: 5,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80"
          alt="Мебель на заказ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container relative z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Мебель на заказ
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Создаем уникальную мебель по вашим размерам и пожеланиям с 2010 года
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span>Более 1000 довольных клиентов</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-accent" />
              <span>10+ лет опыта</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Преимущества мебели на заказ"
            subtitle="Почему стоит выбрать индивидуальное производство"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
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

      {/* Work Process Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Как мы работаем"
            subtitle="Процесс создания вашей идеальной мебели"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workProcess.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionTitle
            title="Наши работы"
            subtitle="Примеры реализованных проектов"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Отзывы клиентов"
            subtitle="Что говорят о нас наши клиенты"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <SectionTitle
            title="Заявка на бесплатный замер"
            subtitle="Оставьте заявку, и наш специалист свяжется с вами для уточнения деталей"
          />
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="furniture_type" className="block text-sm font-medium text-gray-700">
                  Тип мебели
                </label>
                <select
                  id="furniture_type"
                  name="furniture_type"
                  value={formData.furniture_type}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                >
                  <option value="">Выберите тип мебели</option>
                  <option value="kitchen">Кухня</option>
                  <option value="wardrobe">Шкаф-купе</option>
                  <option value="closet">Гардеробная</option>
                  <option value="bathroom">Мебель для ванной</option>
                  <option value="living_room">Мебель для гостиной</option>
                  <option value="office">Офисная мебель</option>
                  <option value="other">Другое</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Адрес
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700">
                  Предпочтительная дата
                </label>
                <input
                  type="date"
                  id="preferred_date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700">
                  Предпочтительное время
                </label>
                <select
                  id="preferred_time"
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
                >
                  <option value="">Выберите время</option>
                  <option value="morning">Утро (9:00 - 12:00)</option>
                  <option value="afternoon">День (12:00 - 17:00)</option>
                  <option value="evening">Вечер (17:00 - 20:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700">
                Дополнительные пожелания
              </label>
              <textarea
                id="additional_notes"
                name="additional_notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-accent focus:ring-accent"
              />
            </div>

            <button type="submit" className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent/90 transition-colors">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CustomFurniture;