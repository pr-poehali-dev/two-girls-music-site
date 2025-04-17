
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music, Ticket, Play, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Главная", icon: <Music className="w-4 h-4 mr-2" />, link: "/" },
    { name: "О нас", icon: <Users className="w-4 h-4 mr-2" />, link: "/about" },
    { name: "Музыка", icon: <Play className="w-4 h-4 mr-2" />, link: "/music" },
    { name: "Концерты", icon: <Ticket className="w-4 h-4 mr-2" />, link: "/concerts" },
    { name: "Контакты", icon: <Mail className="w-4 h-4 mr-2" />, link: "/contacts" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 dark:bg-gray-900/80 dark:border-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dasha Blake and Clover
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.link}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-pink-600 dark:text-gray-200 dark:hover:text-pink-400 transition-colors"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                🎵 Слушать сейчас
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Открыть меню"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="flex items-center px-3 py-2 text-base font-medium text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-md dark:text-gray-200 dark:hover:text-pink-400 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
              🎵 Слушать сейчас
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
