
import { Button } from "@/components/ui/button";
import { PlayCircle, Calendar, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-pink-600 font-semibold mb-2">Яркий поп-дуэт из Находки</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Dasha Blake and Clover
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Зажигательные треки, неповторимые вокальные гармонии и яркие шоу
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-6">
                <PlayCircle className="mr-2 h-5 w-5" /> Последний альбом
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/30 py-6">
                <Calendar className="mr-2 h-5 w-5" /> Предстоящие концерты
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-pink-200 dark:ring-pink-800">
              <img 
                src="/placeholder.svg" 
                alt="Dasha Blake and Clover поп-группа" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-pink-600 dark:text-pink-400">🎵 Новый сингл</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Уже доступен</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-1/2 left-0 w-24 h-24 md:w-40 md:h-40 bg-pink-300/20 dark:bg-pink-700/20 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/3 right-0 w-32 h-32 md:w-60 md:h-60 bg-purple-300/20 dark:bg-purple-700/20 rounded-full blur-3xl -translate-y-1/2"></div>
    </div>
  );
};

export default HeroSection;
