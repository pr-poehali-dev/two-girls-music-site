
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            По вопросам сотрудничества, букинга или просто чтобы поделиться впечатлениями о нашей музыке
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">contact@dashaclover.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <p className="text-gray-600 dark:text-gray-400">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-pink-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <p className="text-gray-600 dark:text-gray-400">г. Находка, ул. Музыкальная, 42</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Мы в соцсетях</h3>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-pink-200 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:hover:bg-pink-950/50 dark:hover:text-pink-400">
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </Button>
                <Button variant="outline" className="border-pink-200 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:hover:bg-pink-950/50 dark:hover:text-pink-400">
                  <Twitter className="w-5 h-5 mr-2" /> Twitter
                </Button>
                <Button variant="outline" className="border-pink-200 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:hover:bg-pink-950/50 dark:hover:text-pink-400">
                  <Facebook className="w-5 h-5 mr-2" /> Facebook
                </Button>
                <Button variant="outline" className="border-pink-200 hover:bg-pink-50 hover:text-pink-700 dark:border-pink-800 dark:hover:bg-pink-950/50 dark:hover:text-pink-400">
                  <Youtube className="w-5 h-5 mr-2" /> YouTube
                </Button>
              </div>
            </div>
          </div>
          
          {/* Форма обратной связи */}
          <div className="bg-pink-50 dark:bg-pink-950/20 p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Напишите нам</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ваше имя" 
                    className="bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-800"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Ваш email" 
                    className="bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-800"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Тема
                </label>
                <Input 
                  id="subject" 
                  placeholder="Тема сообщения" 
                  className="bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-800"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Сообщение
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Ваше сообщение..." 
                  rows={5}
                  className="bg-white dark:bg-gray-900 border-pink-200 dark:border-pink-800"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                Отправить сообщение
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
