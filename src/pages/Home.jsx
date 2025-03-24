import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone, Utensils, TruckIcon, Calendar, Instagram } from 'lucide-react';

const hero = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832708/8e90/bqrsj8guuj9t5xndkort.webp';
const logo = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832708/8e90/e5fxfcdslfujfrhfwk0n.png';
const pizzafritta = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832711/8e90/cw2ydpgjv71gxshqgljv.jpg';
const parigina = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832710/8e90/mrnignytxvms1fo02d7z.jpg';
const paninonapoletano = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832710/8e90/jgy7owxcw3ukeydgguiz.jpg';
const espotony = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832711/8e90/akabbtxkpwwdkgzvrwo3.jpg';
const vetrina = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832711/8e90/akabbtxkpwwdkgzvrwo3.jpg';
// Homepage component for 8&90 rosticceria
const Home = () => {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = '8&90 - Autentica Rosticceria e Tavola Calda Napoletana';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Scopri i sapori autentici della cucina napoletana da 8&90, rosticceria e tavola calda artigianale con tradizioni che risalgono a generazioni. Servizi di catering e rifornimento per locali.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url(${hero})` }}
        ></div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-10">
          <img src={logo} alt="8&90 Rosticceria" className="w-32 md:w-40 mb-4" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Autentica Cucina <br/> <span className="font-caveat">Napoletana</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
            Ricette tramandate da generazioni, gusto che racconta una storia
          </p>
          <Link 
            to="/menu" 
            className="px-8 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 flex items-center space-x-2"
          >
            <span>Scopri il Menu</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Quick Info Band */}
      <section className="bg-secondary text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Clock size={24} className="text-highlight" />
            <div>
              <p className="font-semibold">Orari di Apertura</p>
              <p className="text-sm opacity-80">Mar-Ven: 09:30 - 15:00 | 18:30 - 22:30</p>
              <p className="text-sm opacity-80">Sab: 09:30 - 15:30 | 18:30 - 00:00</p>
              <p className="text-sm opacity-80">Dom: 09:30 - 15:30</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <MapPin size={24} className="text-highlight" />
            <div>
              <p className="font-semibold">Dove Siamo</p>
              <p className="text-sm opacity-80">Corso Europa, 80016 Marano di Napoli NA</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end space-x-3">
            <Phone size={24} className="text-highlight" />
            <div>
              <p className="font-semibold">Contattaci</p>
              <p className="text-sm opacity-80">+39 081 1802 0573</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Catering and Wholesale Section */}
      <section className="py-16 px-4 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">
              I Nostri <span className="text-primary font-caveat">Servizi</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-3">
              Oltre alla nostra rosticceria, offriamo servizi professionali per aziende ed eventi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <TruckIcon size={80} className="text-highlight" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Rifornimento per Locali</h3>
                <p className="text-gray-700 mb-4">
                  Forniamo prodotti di alta qualità per bar, ristoranti e locali commerciali. La nostra produzione all'ingrosso mantiene gli stessi standard qualitativi che ci contraddistinguono.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Prodotti di rosticceria pronti per la vendita</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Consegne programmate e puntuali</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Ordini personalizzati in base alle esigenze</span>
                  </li>
                </ul>
                <a 
                  href="tel:+3908118020573 " 
                  className="text-primary font-semibold hover:text-accent-dark transition-colors flex items-center"
                >
                  Contattaci per un preventivo
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-secondary flex items-center justify-center">
                <Utensils size={80} className="text-highlight" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Servizio Catering</h3>
                <p className="text-gray-700 mb-4">
                  Rendiamo speciale ogni evento con il nostro servizio di catering. Dalla piccola festa in famiglia al grande evento aziendale, portiamo l'autentico sapore napoletano ovunque.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Feste private e celebrazioni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Eventi aziendali e meeting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-light mr-2">•</span>
                    <span>Cerimonie e ricevimenti</span>
                  </li>
                </ul>
                <Link 
                  to="/contatti" 
                  className="text-primary font-semibold hover:text-accent-dark transition-colors flex items-center"
                >
                  Richiedi informazioni
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Tavola Calda Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            Menu del <span className="text-accent-light font-caveat">Giorno</span>
          </h2>
          <div className="text-center flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            <div className="">
              <p className="text-secondary mb-4 text-lg">
                Ogni giorno proponiamo un menu completo per il pranzo con piatti freschi della tradizione napoletana.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-bg rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-accent-light w-7 h-7 rounded-full flex items-center justify-center text-white mr-2">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="font-bold text-primary">Primi Piatti</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pasta fresca, risotti e zuppe della tradizione campana.
                  </p>
                </div>
                
                <div className="bg-bg rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-accent-light w-7 h-7 rounded-full flex items-center justify-center text-white mr-2">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="font-bold text-primary">Secondi Piatti</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Carne, pesce e opzioni vegetariane preparate con cura.
                  </p>
                </div>
                
                <div className="bg-bg rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-accent-light w-7 h-7 rounded-full flex items-center justify-center text-white mr-2">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="font-bold text-primary">Contorni</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Verdure di stagione secondo ricette tradizionali.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Calendar size={20} className="text-accent-light mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Il menu varia ogni giorno</span> in base agli ingredienti freschi di stagione.
                </p>
              </div>
              
              <div className="flex items-start mb-6">
                <Instagram size={20} className="text-accent-light mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-semibold">Seguici su Instagram</span> per scoprire i piatti del giorno:
                  <a 
                    href="https://www.instagram.com/tavolacalda_paninoteca_8e90/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-1 text-accent-dark hover:underline"
                  >
                    @tavolacalda_paninoteca_8e90
                  </a>
                </p>
              </div>
              
              <Link 
                to="/menu" 
                className="px-6 py-2 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 inline-flex items-center space-x-2"
              >
                <span>Scopri di Più</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            {/* <div className="md:w-1/2 relative">
              <img 
                src="/dishes/daily-menu.jpg" 
                alt="Menu del giorno" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-accent-light text-white px-3 py-1 rounded-md font-bold text-sm">
                Speciale Pranzo
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
            Le Nostre <span className="font-caveat text-primary">Specialità</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialties.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-100 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-secondary mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary font-bold">{item.price}</span>
                    <span className="text-sm text-gray-500 italic">{item.tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="px-6 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 inline-flex items-center space-x-2"
            >
              <span>Menu Completo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosa Dicono i <span className="text-highlight font-caveat">Nostri Clienti</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-secondary">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-bg p-6 rounded-lg shadow-lg"
              >
                <div className="font-bold">{testimonial.name}</div>

                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star} 
                      className="w-5 h-5 text-highlight fill-current" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="italic ">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/6">
              <img 
                src={vetrina}
                alt="La nostra storia" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                La Nostra <span className="text-primary font-caveat">Storia</span>
              </h2>
              <p className="text-secondary mb-4">
                Da oltre tre generazioni, portiamo avanti la tradizione culinaria napoletana con passione e dedizione. Ogni piatto che esce dalla nostra cucina racconta una storia di famiglia, ingredienti selezionati e amore per la nostra terra.
              </p>
              <p className="text-secondary mb-6">
                Il nostro obiettivo è offrire ai nostri clienti un'esperienza culinaria autentica e genuina, con piatti preparati con cura e rispetto per la tradizione.
              </p>
              <Link 
                to="/chi-siamo" 
                className="px-6 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 inline-flex items-center space-x-2"
              >
                <span>Scopri di Più</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vieni a Trovarci o <span className="text-highlight">Ordina Online</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Assapora i gusti autentici della cucina napoletana, direttamente a casa tua o nel nostro locale accogliente
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contatti" 
              className="px-8 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300"
            >
              Contattaci
            </Link>
            <a 
              href="tel:+3908118020573 " 
              className="px-8 py-3 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-md transition duration-300"
            >
              Ordina Telefonicamente
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data for the specialties section
const specialties = [
  {
    name: 'Parigina',
    description: 'Pizza rustica farcita con prosciutto cotto, formaggio e prosciutto.',
    tag: 'Più venduto',
    image: parigina,
  },
  {
    name: 'Pizza Fritta',
    description: 'La tradizionale pizza fritta napoletana con ricotta, pomodoro, provola e pepe.',
    tag: 'Ricetta originale',
    image: pizzafritta,
  },
  {
    name: 'Panino Napoletano',
    description: 'Classico saccottino di pasta lievitata farcito con salumi e formaggi.',
    tag: 'Specialità della casa',
    image: paninonapoletano,
  }
];

// Sample data for testimonials
const testimonials = [
  {
    text: 'Qualità prezzo imbattibile. Il mio posto preferito per un pranzo veloce e genuino, personale cordiale e simpatico.',
    name: 'Mario D.'
  },
  {
    text: 'Ho organizzato un catering per il mio compleanno e tutti gli ospiti sono rimasti soddisfatti. Cibo ottimo e servizio impeccabile.',
    name: 'Sara G.'
  },
  {
    text: 'Ho ordinato per pasqua una pastiera e un casatiello. Sono rimasta molto soddisfatto, il casatiello era spettacolare',
    name: 'Giuseppe D.'
  },
  {
    text: 'Tempi di consegna rapidi e cibo caldo e saporito. Il migliore sulla zona.',
    name: 'Salvatore F.'
  },
];

export default Home;