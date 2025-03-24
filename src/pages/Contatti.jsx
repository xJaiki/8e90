import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contatti = () => {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = 'Contatti - 8&90 Rosticceria e Tavola Calda Napoletana';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Contatta 8&90, la rosticceria e tavola calda napoletana a Marano. Vieni a trovarci o ordinare telefonicamente i nostri piatti.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header Section */}
      <section className="relative py-16 bg-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{ backgroundImage: 'url("/backgrounds/pattern.png")' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              I Nostri <span className="font-caveat">Contatti</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Vieni a trovarci o contattaci per ordinazioni e informazioni
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-8">Come Raggiungerci</h2>
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Information */}
            <div className="lg:w-1/2">
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Il Nostro Indirizzo</h3>
                    <p className="text-gray-700 mb-1">Corso Europa, 88</p>
                    <p className="text-gray-700 mb-1">80016 Marano di Napoli (NA)</p>
                    <a 
                      href="https://maps.app.goo.gl/8WnPCUojnkVtpaYb6" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary font-medium mt-2 hover:text-accent-dark transition-colors"
                    >
                      Indicazioni su Google Maps
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Telefono</h3>
                    <p className="text-gray-700 mb-1">+39 081 1802 0573 </p>
                    <p className="text-gray-600 text-sm mb-2">Chiamaci per ordinazioni, prenotazioni o informazioni</p>
                    <a 
                      href="tel:+3908118020573" 
                      className="inline-flex items-center text-primary font-medium hover:text-accent-dark transition-colors"
                    >
                      Chiama ora
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Orari di Apertura</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="text-gray-700 font-medium">Lunedì</div>
                      <div className="text-gray-700">Chiuso</div>
                      
                      <div className="text-gray-700 font-medium">Martedì - Venerdì</div>
                      <div className="text-gray-700">09:30 - 15:00 | 18:30 - 22:30</div>
                      
                      <div className="text-gray-700 font-medium">Sabato</div>
                      <div className="text-gray-700">09:30 - 15:30 | 18:30 - 00:00</div>
                      
                      <div className="text-gray-700 font-medium">Domenica</div>
                      <div className="text-gray-700">09:30 - 15:30</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-secondary mb-6">Social Media</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-6">
                  Seguici sui nostri canali social per restare aggiornato sulle nostre specialità giornaliere, promozioni e novità.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://www.instagram.com/tavolacalda_paninoteca_8e90/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity hover:from-purple-600 hover:to-pink-600"
                  >
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@8e90paninoteca?_t=8reIqWQ95iD&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity hover:bg-gray-900"
                    >
                    <span>TikTok</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map and Image */}
            <div className="lg:w-1/2">
              <div className="h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden mb-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1408.6198319389875!2d14.198369868355645!3d40.89802842252912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b073e7f9d9c81%3A0xaf7a1acf328a5bc9!2s8%2690!5e1!3m2!1sit!2sit!4v1742826975630!5m2!1sit!2sit"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa 8&90"
                ></iframe>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">Ordina da Asporto o Domicilio</h3>
                <p className="text-gray-700 mb-4">
                  Vuoi gustare le nostre specialità comodamente a casa tua? Ordina telefonicamente e passa a ritirare o richiedi la consegna a domicilio (disponibile nel comune di Marano e zone limitrofe).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+3908118020573 " 
                    className="flex-1 text-center px-6 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 inline-flex items-center justify-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Chiama per Ordinare
                  </a>
                  
                  <Link 
                    to="/menu" 
                    className="flex-1 text-center px-6 py-3 bg-secondary hover:bg-secondary/80 text-white font-semibold rounded-md transition duration-300 inline-flex items-center justify-center"
                  >
                    Vedi il Menu
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
            Domande <span className="text-primary font-caveat">Frequenti</span>
          </h2>
          
          <div className="space-y-4">
            <div className="bg-bg rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Accettate prenotazioni?</h3>
              <p className="text-gray-700">
                Sì, accettiamo prenotazioni telefoniche, soprattutto per gruppi numerosi o per ordinazioni speciali.
              </p>
            </div>
            
            <div className="bg-bg rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-primary mb-2">È possibile ordinare in anticipo?</h3>
              <p className="text-gray-700">
                Certamente! Ti consigliamo di ordinare in anticipo soprattutto per i piatti più elaborati o per grandi quantità.
              </p>
            </div>
            
            <div className="bg-bg rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Avete opzioni per vegetariani?</h3>
              <p className="text-gray-700">
                Sì, offriamo diverse opzioni vegetariane e, su richiesta, possiamo preparare alcuni piatti senza glutine.
              </p>
            </div>
            
            <div className="bg-bg rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Offrite servizio catering?</h3>
              <p className="text-gray-700">
                Sì, offriamo servizi di catering per eventi privati e aziendali. Contattaci telefonicamente per un preventivo personalizzato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ti aspettiamo a 8&90!
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Vieni a scoprire i sapori autentici della tradizione napoletana
              </p>
              <div className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-semibold rounded-md transition duration-300 px-8 py-3">
                <Phone size={18} className="mr-2" />
                <a href="tel:+3908118020573">+39 081 1802 0573 </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contatti;