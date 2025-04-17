
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Download } from "lucide-react";

const albums = [
  {
    id: 1,
    title: "Розовые мечты",
    cover: "/placeholder.svg",
    year: "2023",
    tracks: 12,
    description: "Дебютный альбом с яркими хитами",
  },
  {
    id: 2,
    title: "Электрические ночи",
    cover: "/placeholder.svg",
    year: "2024",
    tracks: 8,
    description: "Танцевальные треки и колоритные баллады",
  },
  {
    id: 3,
    title: "Солнечный свет",
    cover: "/placeholder.svg",
    year: "2024",
    tracks: 5,
    description: "EP с летними хитами",
  },
];

const MusicSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Наша музыка
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Откройте для себя все наши альбомы и синглы — от дебютных треков до последних хитов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <Card key={album.id} className="overflow-hidden hover:shadow-lg transition-shadow border-pink-100 dark:border-pink-900">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{album.title}</CardTitle>
                <CardDescription>
                  {album.year} • {album.tracks} треков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{album.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                  <Play className="w-4 h-4 mr-2" /> Слушать
                </Button>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/30">
            Показать все альбомы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
