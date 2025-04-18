
import { Instagram, Twitter, Facebook, Youtube, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950 dark:to-purple-950 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Логотип и описание */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Dasha Blake and Clover
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Молодой музыкальный дуэт из Находки, создающий искреннюю и яркую музыку
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Разделы сайта */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/music" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                  Музыка
                </Link>
              </li>
              <li>
                <Link to="/concerts" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                  Выступления
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                dashaclover@music.ru
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                +7 (999) 123-45-67
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                г. Находка, Приморский край
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-pink-200 dark:bg-pink-800 my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} Dasha Blake and Clover. Все права защищены.
          </p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            Создано с <Heart className="w-4 h-4 text-pink-500 mx-1" /> для наших слушателей
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
