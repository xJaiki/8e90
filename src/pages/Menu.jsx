import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Heart } from 'lucide-react';

const Menu = () => {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = 'Menu - 8&90 Rosticceria e Tavola Calda Napoletana';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Scopri il nostro menu di specialità napoletane: arancini, pizza fritta, parmigiana, calzoni e molto altro. Piatti preparati con ingredienti freschi e ricette tradizionali.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fff5dc]">
      {/* Menu Header */}
      <section className="relative py-24 bg-[#351c11]">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{ backgroundImage: 'url("/backgrounds/pattern.png")' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Il Nostro <span className="text-yellow-300">Menu</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Scopri i sapori autentici della tradizione napoletana. 
              Ogni piatto racconta una storia e porta in tavola l'amore per la nostra terra.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 z-20 bg-[#804e1b] shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center py-3 md:py-4 gap-x-2 gap-y-2 md:gap-x-8">
            {menuCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${category.id}`} 
                className="text-white hover:text-yellow-300 font-medium transition-colors px-3 py-2 text-sm md:text-base"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Menu Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} id={category.id} className="mb-20 scroll-mt-40">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#351c11] mb-3 inline-flex items-center">
                  {category.icon}
                  <span className="ml-3">{category.name}</span>
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems
                  .filter(item => item.category === category.id)
                  .map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {item.isPopular && (
                          <div className="absolute top-0 right-0 bg-yellow-400 text-[#351c11] font-bold px-4 py-1 rounded-bl-lg text-sm">
                            Più richiesto
                          </div>
                        )}
                        {item.isVegetarian && (
                          <div className="absolute bottom-0 left-0 bg-green-500 text-white font-medium px-3 py-1 rounded-tr-lg text-xs">
                            Vegetariano
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-[#804e1b]">{item.name}</h3>
                          <span className="font-bold text-[#351c11]">{item.price}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <div className="text-sm text-gray-500 italic">
                          {item.ingredients && (
                            <p><span className="font-medium">Ingredienti:</span> {item.ingredients}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Specials */}
      <section className="py-16 bg-[#351c11] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Speciali del <span className="text-yellow-300">Giorno</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              I nostri chef preparano ogni giorno qualcosa di speciale. Chiedi al nostro staff!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dailySpecials.map((special, index) => (
              <div key={index} className="bg-[#804e1b] p-6 rounded-lg shadow-lg flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock size={40} className="text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{special.name}</h3>
                  <p className="mb-3 text-white/90">{special.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-yellow-300">{special.price}</span>
                    <span className="text-sm text-white/80">{special.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#351c11] mb-6">
                Informazioni sul Menu
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#804e1b] mb-3">I Nostri Ingredienti</h3>
                  <p className="text-gray-700 mb-4">
                    Utilizziamo solo ingredienti freschi e di qualità, molti dei quali provenienti da produttori locali della Campania.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Heart size={18} className="text-rose-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Mozzarella di bufala DOP campana</span>
                    </li>
                    <li className="flex items-start">
                      <Heart size={18} className="text-rose-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Pomodori San Marzano dell'agro sarnese-nocerino</span>
                    </li>
                    <li className="flex items-start">
                      <Heart size={18} className="text-rose-500 mt-1 mr-2 flex-shrink-0" />
                      <span>Olio extravergine d'oliva della Campania</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#804e1b] mb-3">Allergeni e Diete</h3>
                  <p className="text-gray-700 mb-4">
                    Segnaliamo la presenza di allergeni nei nostri piatti. In caso di allergie o intolleranze, ti preghiamo di informare il nostro staff.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Disponiamo di opzioni vegetariane. Su richiesta, possiamo preparare alcuni piatti in versione senza glutine.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    * I prezzi potrebbero subire variazioni. Il menu potrebbe essere soggetto a modifiche stagionali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#804e1b] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Voglia di <span className="text-yellow-300">8&90</span>?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Vieni a trovarci o ordina comodamente da casa
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contatti" 
              className="px-8 py-3 bg-[#351c11] hover:bg-[#26140c] text-white font-semibold rounded-md transition-duration-300 flex items-center justify-center gap-2"
            >
              <span>Trova il Locale</span>
              <ArrowRight size={18} />
            </Link>
            <a 
              href="#" 
              className="px-8 py-3 bg-white text-[#804e1b] hover:bg-gray-100 font-semibold rounded-md transition-duration-300"
            >
              Ordina Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Menu categories with descriptions
const menuCategories = [
  {
    id: 'antipasti',
    name: 'Antipasti e Fritti',
    icon: <span className="text-yellow-300">🍽️</span>,
    description: 'Deliziosi antipasti e fritti napoletani, preparati secondo le ricette tradizionali per iniziare il pasto con gusto.'
  },
  {
    id: 'primi',
    name: 'Primi Piatti',
    icon: <span className="text-yellow-300">🍝</span>,
    description: 'Pasta fresca e sughi fatti in casa, i sapori autentici della cucina napoletana.'
  },
  {
    id: 'secondi',
    name: 'Secondi Piatti',
    icon: <span className="text-yellow-300">🍖</span>,
    description: 'Prelibatezze di carne e pesce preparate con passione e ingredienti selezionati.'
  },
  {
    id: 'pizza',
    name: 'Pizza e Calzoni',
    icon: <span className="text-yellow-300">🍕</span>,
    description: 'La nostra pizza fritta e al forno, insieme ai tradizionali calzoni napoletani.'
  },
  {
    id: 'contorni',
    name: 'Contorni',
    icon: <span className="text-yellow-300">🥗</span>,
    description: 'Verdure di stagione e contorni tipici della tradizione partenopea.'
  },
  {
    id: 'dolci',
    name: 'Dolci',
    icon: <span className="text-yellow-300">🍰</span>,
    description: 'Dolci tradizionali napoletani per concludere in dolcezza.'
  }
];

// Menu items with detailed information
const menuItems = [
  // Antipasti e Fritti
  {
    category: 'antipasti',
    name: 'Arancini di Riso',
    description: 'Croccanti fuori e morbidi dentro, farciti con ragù, piselli e mozzarella filante.',
    ingredients: 'Riso, ragù di carne, piselli, mozzarella, uova, pangrattato, sale, pepe',
    price: '€3.50',
    image: '/dishes/arancini.jpg',
    isPopular: true
  },
  {
    category: 'antipasti',
    name: 'Crocchè di Patate',
    description: 'Morbide crocchette di patate fatte in casa con prezzemolo e pepe.',
    ingredients: 'Patate, uova, prezzemolo, parmigiano, pangrattato, sale, pepe',
    price: '€2.50',
    image: '/dishes/crocche.jpg',
    isVegetarian: true
  },
  {
    category: 'antipasti',
    name: 'Frittatina di Pasta',
    description: 'Pasta fritta con besciamella, piselli, prosciutto e formaggio.',
    ingredients: 'Pasta, besciamella, piselli, prosciutto, provola, uova, pangrattato',
    price: '€3.50',
    image: '/dishes/frittatina.jpg'
  },
  {
    category: 'antipasti',
    name: 'Montanarine',
    description: 'Piccole pizze fritte condite con salsa di pomodoro, basilico e parmigiano.',
    ingredients: 'Impasto per pizza, pomodoro San Marzano, basilico, parmigiano',
    price: '€4.00',
    image: '/dishes/montanarine.jpg',
    isVegetarian: true
  },
  {
    category: 'antipasti',
    name: 'Polpette di Melanzane',
    description: 'Polpette vegetariane di melanzane con basilico e provola affumicata.',
    ingredients: 'Melanzane, uova, basilico, provola affumicata, pangrattato, parmigiano',
    price: '€4.00',
    image: '/dishes/polpette-melanzane.jpg',
    isVegetarian: true
  },
  {
    category: 'antipasti',
    name: 'Zeppole Salate',
    description: 'Morbide palline di pasta lievitata fritte, condite con pomodorini e basilico.',
    ingredients: 'Farina, acqua, lievito, sale, pomodorini, basilico',
    price: '€3.00',
    image: '/dishes/zeppole-salate.jpg',
    isVegetarian: true
  },

  // Primi Piatti
  {
    category: 'primi',
    name: 'Pasta e Patate con Provola',
    description: 'La tradizionale pasta e patate napoletana arricchita con provola affumicata.',
    ingredients: 'Pasta mista, patate, provola affumicata, sedano, carote, cipolla, pomodoro',
    price: '€8.50',
    image: '/dishes/pasta-patate.jpg',
    isVegetarian: true
  },
  {
    category: 'primi',
    name: 'Spaghetti al Pomodoro',
    description: 'Spaghetti con salsa di pomodoro San Marzano, basilico e olio extravergine.',
    ingredients: 'Spaghetti, pomodori San Marzano, basilico, aglio, olio extravergine',
    price: '€7.50',
    image: '/dishes/spaghetti-pomodoro.jpg',
    isVegetarian: true
  },
  {
    category: 'primi',
    name: 'Paccheri alla Genovese',
    description: 'Paccheri conditi con la tradizionale genovese napoletana a base di cipolle e carne.',
    ingredients: 'Paccheri, cipolle, carne di manzo, carote, sedano, vino bianco',
    price: '€10.00',
    image: '/dishes/paccheri-genovese.jpg',
    isPopular: true
  },
  {
    category: 'primi',
    name: 'Risotto alla Pescatora',
    description: 'Risotto con frutti di mare freschi e pomodorini.',
    ingredients: 'Riso Carnaroli, cozze, vongole, gamberi, calamari, pomodorini, prezzemolo',
    price: '€12.00',
    image: '/dishes/risotto-pescatora.jpg'
  },
  {
    category: 'primi',
    name: 'Scialatielli ai Frutti di Mare',
    description: 'Pasta fresca condita con frutti di mare, pomodorini e prezzemolo.',
    ingredients: 'Scialatielli, cozze, vongole, gamberi, pomodorini, aglio, prezzemolo',
    price: '€12.50',
    image: '/dishes/scialatielli.jpg'
  },
  {
    category: 'primi',
    name: 'Ziti alla Scarpariello',
    description: 'Pasta condita con pomodorini, parmigiano, pecorino e basilico.',
    ingredients: 'Ziti, pomodorini, pecorino, parmigiano, basilico, peperoncino',
    price: '€8.00',
    image: '/dishes/ziti-scarpariello.jpg',
    isVegetarian: true
  },

  // Secondi Piatti
  {
    category: 'secondi',
    name: 'Parmigiana di Melanzane',
    description: 'Strati di melanzane fritte, pomodoro, basilico e mozzarella gratinati al forno.',
    ingredients: 'Melanzane, pomodoro San Marzano, mozzarella, basilico, parmigiano',
    price: '€9.00',
    image: '/dishes/parmigiana.jpg',
    isVegetarian: true,
    isPopular: true
  },
  {
    category: 'secondi',
    name: 'Polpette al Sugo',
    description: 'Polpette di carne cotte nel sugo di pomodoro, servite con pane tostato.',
    ingredients: 'Carne macinata, uova, parmigiano, prezzemolo, pomodoro, basilico',
    price: '€9.50',
    image: '/dishes/polpette.jpg'
  },
  {
    category: 'secondi',
    name: 'Baccalà Fritto',
    description: 'Baccalà fritto in pastella croccante servito con insalatina.',
    ingredients: 'Baccalà, farina, uova, acqua frizzante, limone, prezzemolo',
    price: '€12.00',
    image: '/dishes/baccala.jpg'
  },
  {
    category: 'secondi',
    name: 'Salsiccia e Friarielli',
    description: 'Salsiccia napoletana alla griglia con friarielli saltati in padella.',
    ingredients: 'Salsiccia, friarielli, aglio, peperoncino, olio extravergine',
    price: '€10.00',
    image: '/dishes/salsiccia-friarielli.jpg'
  },

  // Pizza e Calzoni
  {
    category: 'pizza',
    name: 'Pizza Fritta',
    description: 'La tradizionale pizza fritta napoletana con ricotta, provola e pepe.',
    ingredients: 'Impasto per pizza, ricotta, provola, pomodoro, pepe',
    price: '€5.00',
    image: '/dishes/pizza-fritta.jpg',
    isPopular: true
  },
  {
    category: 'pizza',
    name: 'Calzone Napoletano',
    description: 'Calzone ripieno di ricotta, salame, mozzarella e pepe.',
    ingredients: 'Impasto per pizza, ricotta, salame, mozzarella, pepe',
    price: '€6.00',
    image: '/dishes/calzone.jpg'
  },
  {
    category: 'pizza',
    name: 'Pizza Margherita',
    description: 'Pizza con pomodoro San Marzano, mozzarella di bufala e basilico.',
    ingredients: 'Impasto per pizza, pomodoro San Marzano, mozzarella di bufala, basilico, olio',
    price: '€6.50',
    image: '/dishes/pizza-margherita.jpg',
    isVegetarian: true
  },
  {
    category: 'pizza',
    name: 'Pizza Marinara',
    description: 'Pizza con pomodoro, aglio, origano e olio extravergine d\'oliva.',
    ingredients: 'Impasto per pizza, pomodoro San Marzano, aglio, origano, olio extravergine',
    price: '€5.00',
    image: '/dishes/pizza-marinara.jpg',
    isVegetarian: true
  },

  // Contorni
  {
    category: 'contorni',
    name: 'Friarielli',
    description: 'Friarielli (broccoli napoletani) saltati con aglio e peperoncino.',
    ingredients: 'Friarielli, aglio, peperoncino, olio extravergine',
    price: '€4.00',
    image: '/dishes/friarielli.jpg',
    isVegetarian: true
  },
  {
    category: 'contorni',
    name: 'Patate al Forno',
    description: 'Patate al forno con rosmarino e aglio.',
    ingredients: 'Patate, rosmarino, aglio, sale, olio extravergine',
    price: '€3.50',
    image: '/dishes/patate.jpg',
    isVegetarian: true
  },

  // Dolci
  {
    category: 'dolci',
    name: 'Babà al Rum',
    description: 'Il tradizionale babà napoletano bagnato al rum.',
    ingredients: 'Farina, uova, burro, zucchero, lievito, rum',
    price: '€4.00',
    image: '/dishes/baba.jpg',
    isVegetarian: true
  },
  {
    category: 'dolci',
    name: 'Sfogliatella Riccia',
    description: 'Sfogliatella a pasta sfoglia con ripieno di ricotta, semolino e canditi.',
    ingredients: 'Pasta sfoglia, ricotta, semolino, zucchero, canditi, cannella',
    price: '€3.50',
    image: '/dishes/sfogliatella.jpg',
    isVegetarian: true,
    isPopular: true
  },
  {
    category: 'dolci',
    name: 'Pastiera Napoletana',
    description: 'Il classico dolce pasquale napoletano con grano, ricotta e canditi.',
    ingredients: 'Pasta frolla, grano cotto, ricotta, uova, zucchero, canditi, fiori d\'arancio',
    price: '€4.00',
    image: '/dishes/pastiera.jpg',
    isVegetarian: true
  }
];

// Daily specials rotating menu
const dailySpecials = [
  {
    name: 'Gnocchi alla Sorrentina',
    description: 'Gnocchi di patate fatti in casa con pomodoro, mozzarella e basilico, gratinati al forno.',
    price: '€10.00',
    availability: 'Lunedì e Giovedì'
  },
  {
    name: 'Timballo di Maccheroni',
    description: 'Timballo di pasta con ragù, polpettine, mozzarella, uova e piselli.',
    price: '€12.00',
    availability: 'Martedì e Venerdì'
  },
  {
    name: 'Calamarata ai Frutti di Mare',
    description: 'Pasta a forma di calamaro con frutti di mare, pomodorini e prezzemolo.',
    price: '€13.50',
    availability: 'Mercoledì e Sabato'
  },
  {
    name: 'Ragù Napoletano con Braciola',
    description: 'Il tradizionale ragù napoletano della domenica con braciola di carne.',
    price: '€14.00',
    availability: 'Solo Domenica'
  }
];

export default Menu;