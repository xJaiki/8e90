import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import hero from '../assets/hero.webp';

// Homepage component for 8&90 rosticceria
const Home = () => {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = '8&90 - Autentica Rosticceria e Tavola Calda Napoletana';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Scopri i sapori autentici della cucina napoletana da 8&90, rosticceria e tavola calda artigianale con tradizioni che risalgono a generazioni.'
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
              <p className="text-sm opacity-80">+39 334 925 9323</p>
            </div>
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
                <div className="h-64 overflow-hidden">
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
      <section className="py-16 bg-secondary text-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cosa Dicono i <span className="text-highlight font-caveat">Nostri Clienti</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-secondary">
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
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/about-image.jpg" 
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
                La rosticceria 8&90 è nata nel cuore di Napoli con l'obiettivo di offrire i sapori autentici della cucina partenopea, mantenendo vive le ricette tradizionali e l'arte della preparazione artigianale.
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
              href="#" 
              className="px-8 py-3 bg-white text-secondary hover:bg-gray-100 font-semibold rounded-md transition duration-300"
            >
              Ordina Online
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
    name: 'Arancini di Riso',
    description: 'Croccanti all\'esterno e morbidi all\'interno, ripieni di ragù, piselli e mozzarella filante.',
    price: '€3.50',
    tag: 'Più venduto',
    image: '/dishes/arancini.jpg'
  },
  {
    name: 'Pizza Fritta',
    description: 'La tradizionale pizza fritta napoletana con ricotta, pomodoro, provola e pepe.',
    price: '€5.00',
    tag: 'Specialità della casa',
    image: '/dishes/pizza-fritta.jpg'
  },
  {
    name: 'Parmigiana di Melanzane',
    description: 'Strati di melanzane fritte, pomodoro, basilico e mozzarella al forno.',
    price: '€4.50',
    tag: 'Vegetariano',
    image: '/dishes/parmigiana.jpg'
  }
];

// Sample data for testimonials
const testimonials = [
  {
    text: 'La migliore rosticceria di Napoli! Gli arancini sono incredibili e il personale è sempre gentile e disponibile.',
    name: 'Marco R.'
  },
  {
    text: 'Vengo qui da anni e la qualità non è mai scesa. Sapori autentici che ti fanno sentire a casa.',
    name: 'Francesca T.'
  },
  {
    text: 'Ho ordinato per una cena in famiglia e tutti sono rimasti entusiasti. Cibo eccellente e servizio impeccabile.',
    name: 'Giuseppe M.'
  }
];

export default Home;