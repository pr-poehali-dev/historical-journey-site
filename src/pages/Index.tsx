import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const historicalLocations = [
    {
      id: 1,
      name: 'Красная площадь',
      year: '1493',
      description: 'Центральная площадь Москвы, свидетель важнейших исторических событий России.',
      x: 45,
      y: 35,
      era: 'Средневековье'
    },
    {
      id: 2,
      name: 'Эрмитаж',
      year: '1764',
      description: 'Один из крупнейших музеев мира, основанный Екатериной II.',
      x: 35,
      y: 25,
      era: 'Новое время'
    },
    {
      id: 3,
      name: 'Петергоф',
      year: '1714',
      description: 'Дворцово-парковый ансамбль, загородная резиденция российских императоров.',
      x: 32,
      y: 28,
      era: 'Новое время'
    },
    {
      id: 4,
      name: 'Кремль',
      year: '1156',
      description: 'Древнейшая часть Москвы, официальная резиденция Президента России.',
      x: 45,
      y: 36,
      era: 'Средневековье'
    }
  ];

  const tours = [
    {
      title: 'Древняя Русь',
      duration: '3 часа',
      locations: 5,
      description: 'Путешествие в эпоху зарождения российской государственности'
    },
    {
      title: 'Императорская Россия',
      duration: '4 часа',
      locations: 7,
      description: 'Величие и роскошь эпохи российских императоров'
    },
    {
      title: 'Советская эпоха',
      duration: '2.5 часа',
      locations: 6,
      description: 'История становления и развития Советского Союза'
    }
  ];

  const timeline = [
    { year: '862', event: 'Призвание варягов', description: 'Начало российской государственности' },
    { year: '988', event: 'Крещение Руси', description: 'Принятие христианства князем Владимиром' },
    { year: '1147', event: 'Основание Москвы', description: 'Первое летописное упоминание Москвы' },
    { year: '1703', event: 'Основание Санкт-Петербурга', description: 'Петр I закладывает новую столицу' },
    { year: '1917', event: 'Октябрьская революция', description: 'Начало советской эпохи' },
    { year: '1991', event: 'Распад СССР', description: 'Начало современной истории России' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Исторический экскурс</h1>
            <div className="flex gap-6">
              {['home', 'history', 'map', 'tours'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    activeSection === section ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'history' && 'История'}
                  {section === 'map' && 'Карта'}
                  {section === 'tours' && 'Экскурсии'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Прошлое и настоящее
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
            Погрузитесь в увлекательное путешествие сквозь века. Исследуйте исторические локации, 
            узнавайте о важнейших событиях и открывайте новые грани истории.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('map')}
            className="animate-scale-in"
          >
            Исследовать карту
            <Icon name="Map" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Временная шкала</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-8 items-start group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative flex-1">
                  <div className="absolute -left-4 top-2 w-3 h-3 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Интерактивная карта локаций</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 relative overflow-hidden bg-muted/50 min-h-[500px]">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg" />
                {historicalLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`absolute w-4 h-4 rounded-full transition-all duration-300 ${
                      selectedLocation === location.id
                        ? 'bg-primary scale-150 shadow-lg'
                        : 'bg-primary/60 hover:bg-primary hover:scale-125'
                    }`}
                    style={{
                      left: `${location.x}%`,
                      top: `${location.y}%`
                    }}
                    title={location.name}
                  />
                ))}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      Нажмите на точку для подробной информации
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              {selectedLocation ? (
                <Card className="p-6 animate-scale-in">
                  {historicalLocations
                    .filter((loc) => loc.id === selectedLocation)
                    .map((location) => (
                      <div key={location.id}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                            <p className="text-sm text-muted-foreground">{location.era}</p>
                          </div>
                          <span className="text-lg font-semibold text-primary">{location.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{location.description}</p>
                      </div>
                    ))}
                </Card>
              ) : (
                <Card className="p-8 text-center border-dashed">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    Выберите локацию на карте для просмотра информации
                  </p>
                </Card>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold mb-3">Все локации:</h3>
                {historicalLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedLocation === location.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/70'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{location.name}</span>
                      <span className="text-sm opacity-80">{location.year}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Экскурсии</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{tour.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    <span>{tour.locations} локаций</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Исторический экскурс. Путешествие сквозь время.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
