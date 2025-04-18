
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2, Download, Music } from "lucide-react";

const albums = [
  {
    id: 1,
    title: "Неразлучные",
    cover: "/placeholder.svg",
    year: "2025",
    tracks: 20,
    description: "Дебютный альбом о дружбе, любви и искренних чувствах",
  },
];

const featuredTracks = [
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
  {
    id: 3,
    title: "Неразлучные",
    cover: "/placeholder.svg",
    duration: "3:18",
    description: "Заглавная песня альбома о крепкой дружбе и поддержке",
  },
];

const allTracks = [
  "Первая любовь", "Ненормальные", "Неразлучные", "Я так", 
  "Нежность", "Твой взгляд", "Без слов", "Вместе навсегда", 
  "Мечты сбываются", "Яркие моменты", "Наш мир", "Тёплое лето", 
  "Осенний дождь", "Зимние ночи", "Весенний ветер", "Тихий шёпот", 
  "Громкие слова", "Искренне", "Юность", "Наш путь"
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
            Скоро выйдет наш дебютный альбом, а пока вы можете узнать о нём подробнее
          </p>
        </div>
        
        {/* Дебютный альбом */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Дебютный альбом</h3>
          
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
                «Неразлучные» — это история нашей дружбы, первой любви и искренних чувств. В альбом войдут 20 композиций, каждая из которых раскрывает особую грань наших эмоций и переживаний.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Мы вложили в эти песни все свои эмоции и надеемся, что они найдут отклик в ваших сердцах. Это только начало нашего творческого пути!
              </p>
              
              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                <h5 className="font-medium mb-2 text-pink-600 dark:text-pink-400 flex items-center">
                  <Music className="w-4 h-4 mr-2" /> Треки альбома:
                </h5>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {allTracks.map((track, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-pink-500 mr-1">{index + 1}.</span> {track}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Избранные треки */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Избранные треки</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTracks.map((track) => (
              <Card key={track.id} className="overflow-hidden hover:shadow-lg transition-shadow border-pink-100 dark:border-pink-900">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={track.cover} 
                    alt={track.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">{track.title}</CardTitle>
                  <CardDescription>{track.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{track.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                    <Play className="w-4 h-4 mr-2" /> Слушать
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Heart className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-900/30">
              Узнать больше о нашей музыке
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
