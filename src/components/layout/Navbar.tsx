
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../../contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { items } = useCart();
  const location = useLocation();

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="font-heading font-bold text-xl flex items-center">
            <span className="text-accent">Home</span>
            <span>Style</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Главная
            </Link>
            <Link to="/catalog" className="nav-link">
              Каталог
            </Link>
            <Link to="/custom-furniture" className="nav-link">
              Мебель на заказ
            </Link>
            <Link to="/about" className="nav-link">
              О нас
            </Link>
            <Link to="/contacts" className="nav-link">
              Контакты
            </Link>
            <Link to="/cart" className="relative p-2 hover:bg-accent/10 rounded-full transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4 p-2">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-white text-xs flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-sm border-t animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className="nav-link py-2">
                Главная
              </Link>
              <Link
                to="/catalog"
                className="nav-link py-2"
              >
                Каталог
              </Link>
              <Link
                to="/custom-furniture"
                className="nav-link py-2"
              >
                Мебель на заказ
              </Link>
              <Link
                to="/about"
                className="nav-link py-2"
              >
                О нас
              </Link>
              <Link
                to="/contacts"
                className="nav-link py-2"
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
