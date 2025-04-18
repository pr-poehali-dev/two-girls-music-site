
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Ticket, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const concerts = [
  {
    id: 1,
    city: "Находка",
    venue: "Городской Дом культуры",
    date: "15 июня 2025",
    time: "18:00",
    isSoldOut: false,
  },
  {
    id: 2,
    city: "Владивосток",
    venue: "Молодежный центр",
    date: "22 июня 2025",
    time: "19:00",
    isSoldOut: false,
  },
  {
    id: 3,
    city: "Уссурийск",
    venue: "Городской парк культуры",
    date: "29 июня 2025",
    time: "17:30",
    isSoldOut: false,
  },
];

const ConcertSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Ближайшие выступления
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Приходите на наши первые концерты и станьте частью нашей музыкальной истории!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concerts.map((concert) => (
            <Card key={concert.id} className="overflow-hidden border-pink-100 dark:border-pink-900">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{concert.city}</h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-1" />
                      <p>{concert.venue}</p>
                    </div>
                  </div>
                  <Badge className="bg-pink-500">Скоро</Badge>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p>{concert.date} • {concert.time}</p>
                </div>
              </CardContent>
              
              <CardFooter className="bg-pink-50 dark:bg-pink-950/30 p-4">
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Скоро в продаже
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Мы только начинаем наш творческий путь! Следите за обновлениями, скоро будут объявлены новые концерты.
          </p>
          <Button className="border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-900/30" variant="outline">
            Подписаться на обновления
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConcertSection;
