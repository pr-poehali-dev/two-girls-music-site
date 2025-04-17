
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MusicIcon, Award, Radio, Mic2 } from "lucide-react";

const members = [
  {
    id: 1,
    name: "Dasha",
    role: "Вокал",
    image: "/placeholder.svg",
    description: "Солистка с мощным голосом и музыкальным образованием. Автор текстов многих хитов группы.",
  },
  {
    id: 2,
    name: "Blake",
    role: "Вокал/Танцы",
    image: "/placeholder.svg",
    description: "Вокалистка и хореограф группы. Участвовала в международных танцевальных конкурсах.",
  },
  {
    id: 3,
    name: "Clover",
    role: "Клавишные/Бэк-вокал",
    image: "/placeholder.svg",
    description: "Мультиинструменталист и аранжировщик. Отвечает за уникальное звучание группы.",
  },
];

const achievements = [
  {
    id: 1,
    icon: <Award className="w-10 h-10 text-pink-500" />,
    title: "Премия «Золотой хит»",
    description: "За лучший дебютный альбом года",
  },
  {
    id: 2,
    icon: <MusicIcon className="w-10 h-10 text-purple-500" />,
    title: "10 миллионов прослушиваний",
    description: "Сингл «Электрические ночи» на всех платформах",
  },
  {
    id: 3,
    icon: <Radio className="w-10 h-10 text-pink-500" />,
    title: "Ротации на радио",
    description: "Треки на ведущих радиостанциях страны",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-pink-50 dark:bg-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            О группе
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Dasha Blake and Clover — яркий музыкальный коллектив из Находки, покоривший сердца миллионов слушателей своими запоминающимися хитами
          </p>
        </div>
        
        {/* История группы */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg"
                  alt="История группы Dasha Blake and Clover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white font-medium">Выступление на фестивале «Яркие звезды»</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">История группы</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Группа «Dasha Blake and Clover» образовалась в 2025 году в городе Находка, когда трое талантливых музыкантов решили объединить свои творческие силы. Их уникальное звучание и яркие образы быстро привлекли внимание слушателей.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Всего за несколько месяцев после основания группа выпустила свой дебютный альбом «Розовые мечты», который принес им национальную известность и премию за лучший дебют года.
              </p>
            </div>
          </div>
        </div>
        
        {/* Участники группы */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Участники</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md flex flex-col items-center">
                <Avatar className="w-24 h-24 rounded-full mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xl">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-pink-600 dark:text-pink-400 mb-3 flex items-center justify-center">
                    <Mic2 className="w-4 h-4 mr-1" /> {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Достижения */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Достижения</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
