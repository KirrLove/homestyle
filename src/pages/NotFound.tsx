import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Animated 404 */}
        <div className="relative">
          <div className="text-[200px] md:text-[300px] font-bold text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text animate-pulse leading-none">
            404
          </div>
          <div className="absolute inset-0 text-[200px] md:text-[300px] font-bold text-primary/10 animate-bounce leading-none">
            404
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Страница не найдена
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              К сожалению, страница которую вы ищете не существует или была перемещена
            </p>
          </div>

          {/* Decorative furniture icons */}
          <div className="flex justify-center items-center space-x-6 py-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              🪑
            </div>
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
              🛏️
            </div>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              🚪
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                На главную
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/catalog" className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Каталог товаров
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад
            </Button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-card border border-border rounded-lg max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Знали ли вы?</span><br />
            В HomeStyle мы создаем мебель уже более 15 лет и изготовили свыше 10,000 предметов интерьера!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;