
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Download } from "lucide-react";

const albums = [
  {
    id: 1,
    title: "Неразлучные",
    cover: "/placeholder.svg",
    year: "2025",
    tracks: 6,
    description: "Дебютный альбом с нашими первыми авторскими треками",
  },
];

const tracks = [
  {
    id: 1,
    title: "Первая любовь",
    cover: "/placeholder.svg",
    duration: "3:42",
    description: "Лирическая композиция о первых чувствах и эмоциях",
  },
  {
    id: 2,
    title: "Ненормальные",
    cover: "/placeholder.svg",
    duration: "2:56",
    description: "Энергичный трек о том, как быть собой и не бояться отличаться",
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
            Скоро выйдет наш дебютный альбом, а пока вы можете послушать первые синглы
          </p>
        </div>
        
        {/* Дебютный альбом */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Грядущий альбом</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border-pink-100 dark:border-pink-900">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={albums[0].cover} 
                    alt={albums[0].title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{albums[0].title}</CardTitle>
                  <CardDescription>
                    {albums[0].year} • {albums[0].tracks} треков • Скоро в релизе
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{albums[0].description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    <Play className="w-4 h-4 mr-2" /> Предзаказ
                  </Button>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">О нашем альбоме</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                «Неразлучные» — это история нашей дружбы, творчества и первых шагов в музыке. Каждый трек — это частичка нашей души и наших переживаний.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Мы вложили в эти песни все свои эмоции и надеемся, что они найдут отклик в ваших сердцах. Это только начало нашего творческого пути!
              </p>
            </div>
          </div>
        </div>
        
        {/* Доступные треки */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Наши синглы</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <Card key={track.id} className="overflow-hidden hover:shadow-lg transition-shadow border-pink-100 dark:border-pink-900 flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={track.cover} 
                      alt={track.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </div>
                <div className="sm:w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{track.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{track.duration}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{track.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
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
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
