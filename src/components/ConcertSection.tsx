
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Ticket, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const concerts = [
  {
    id: 1,
    city: "Москва",
    venue: "Крокус Сити Холл",
    date: "27 июня 2024",
    time: "19:00",
    isSoldOut: false,
  },
  {
    id: 2,
    city: "Санкт-Петербург",
    venue: "Ледовый дворец",
    date: "3 июля 2024",
    time: "20:00",
    isSoldOut: false,
  },
  {
    id: 3,
    city: "Екатеринбург",
    venue: "МВЦ Екатеринбург-ЭКСПО",
    date: "10 июля 2024",
    time: "19:00",
    isSoldOut: true,
  },
];

const ConcertSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 dark:from-gray-950 dark:to-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Ближайшие концерты
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Не пропустите наши яркие выступления — увидимся на концертах!
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
                  {concert.isSoldOut ? (
                    <Badge variant="destructive">Sold Out</Badge>
                  ) : (
                    <Badge className="bg-green-500">Билеты в продаже</Badge>
                  )}
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  <p>{concert.date} • {concert.time}</p>
                </div>
              </CardContent>
              
              <CardFooter className="bg-pink-50 dark:bg-pink-950/30 p-4">
                <Button 
                  className={`w-full ${
                    concert.isSoldOut 
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400" 
                      : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  }`}
                  disabled={concert.isSoldOut}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  {concert.isSoldOut ? "Распродано" : "Купить билеты"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="border-pink-300 hover:bg-pink-50 dark:border-pink-700 dark:hover:bg-pink-900/30" variant="outline">
            Посмотреть все концерты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConcertSection;
