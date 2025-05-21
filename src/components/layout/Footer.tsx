
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center">
              <span className="text-accent">Home</span>
              <span>Style</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Создаем уникальную мебель для вашего комфорта с 2015 года. Наша философия — качество, стиль и индивидуальность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors p-2 hover:bg-white/10 rounded-full">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 inline-flex items-center after:content-[''] after:ml-2 after:h-0.5 after:w-10 after:bg-accent after:inline-block">Контакты</h3>
            <div className="space-y-4">
              <a href="tel:+79770440344" className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-2 border border-gray-700 rounded-lg group-hover:border-accent transition-colors">
                  <Phone size={18} />
                </div>
                <span>+7 (977) 044-03-44</span>
              </a>
              <a href="mailto:vladimirproverka02@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors group">
                <div className="p-2 border border-gray-700 rounded-lg group-hover:border-accent transition-colors">
                  <Mail size={18} />
                </div>
                <span>vladimirproverka02@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 border border-gray-700 rounded-lg">
                  <MapPin size={18} />
                </div>
                <span>г. Кузнецк</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="p-2 border border-gray-700 rounded-lg">
                  <Clock size={18} />
                </div>
                <span>Пн-Пт: 9:00-18:00</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 inline-flex items-center after:content-[''] after:ml-2 after:h-0.5 after:w-10 after:bg-accent after:inline-block">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-accent transition-colors flex items-center">
                  <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 inline-flex items-center after:content-[''] after:ml-2 after:h-0.5 after:w-10 after:bg-accent after:inline-block">Информация</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-center">
                <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                Срок изготовления: 5-10 рабочих дней
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                Доставка по всей России
              </li>
              <li className="text-gray-300 flex items-center">
                <span className="h-1.5 w-1.5 bg-accent rounded-full mr-2"></span>
                Собственное производство
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomeStyle. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
