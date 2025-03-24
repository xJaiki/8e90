import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, Users, Clock, ShieldCheck } from 'lucide-react';
const logo = 'https://res.cloudinary.com/dnjclqtlc/image/upload/v1742832708/8e90/acj358zdnrgzminl6viz.png';

const ChiSiamo = () => {
  // SEO optimization - set page title and meta description
  useEffect(() => {
    document.title = 'Chi Siamo - 8&90 Rosticceria e Tavola Calda Napoletana';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        '8&90 è una piccola realtà familiare di Marano con grande esperienza nella ristorazione. Scopri la nostra storia, i nostri valori e la passione per la cucina napoletana.'
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
              Chi <span className="font-caveat">Siamo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Una piccola realtà familiare con una grande passione per la cucina napoletana
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="md:w-1/8">
              <img 
                src={logo}
                alt="La nostra storia" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                La Nostra <span className="text-primary font-caveat">Storia</span>
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                8&90 è una piccola attività nata recentemente a Marano di Napoli, ma le nostre radici affondano in una lunga tradizione culinaria.
              </p>
              <p className="text-gray-700 mb-4">
                Siamo una famiglia che ha trasformato la propria passione per la cucina in un'attività, portando nella nostra rosticceria e tavola calda l'esperienza accumulata nel corso degli anni.
              </p>
              <p className="text-gray-700 mb-4">
                Ogni ricetta che proponiamo è frutto di conoscenze tramandate di generazione in generazione, arricchite da un tocco personale che rende i nostri piatti unici.
              </p>
              <p className="text-gray-700 mb-4">
                La nostra missione è semplice: far assaporare a tutti i nostri clienti l'autentica cucina napoletana, preparata con cura artigianale e ingredienti di qualità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              I Nostri <span className="text-primary font-caveat">Valori</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ciò che ci guida ogni giorno nella preparazione dei nostri piatti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-3">Passione</h3>
              <p className="text-gray-700 text-center">
                Mettiamo il cuore in ogni piatto che prepariamo. La passione per la cucina si riflette nei sapori autentici che proponiamo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-3">Qualità</h3>
              <p className="text-gray-700 text-center">
                Scegliamo con cura ogni ingrediente, privilegiando prodotti locali e di stagione per garantire freschezza e sapore in ogni boccone.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-3">Famiglia</h3>
              <p className="text-gray-700 text-center">
                Gestiamo la nostra attività come una grande famiglia, portando calore e accoglienza in ogni aspetto del nostro lavoro e nel rapporto con i clienti.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-3">Efficienza</h3>
              <p className="text-gray-700 text-center">
                Sappiamo quanto sia prezioso il tempo dei nostri clienti. Offriamo un servizio rapido senza mai compromettere la qualità delle nostre preparazioni.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-accent-light rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary text-center mb-3">Professionalità</h3>
              <p className="text-gray-700 text-center">
                Ogni membro del nostro team è formato per offrire un servizio impeccabile, curato nei minimi dettagli e attento alle esigenze di chi ci sceglie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              La Nostra <span className="text-primary font-caveat">Famiglia</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Dietro ogni piatto c'è una squadra unita dalla passione per la cucina
            </p>
          </div>
          
          <div className="bg-bg rounded-lg shadow-md p-8">
            <div className=" text-center flex flex-col md:flex-row items-center gap-8">
              {/* <div className="md:w-1/3">
                <img 
                  src="/team-photo.jpg" 
                  alt="Il nostro team" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div> */}
              <div className="">
                <h3 className="text-2xl font-bold text-primary mb-4">Una piccola grande famiglia</h3>
                <p className="text-gray-700 mb-4">
                  8&90 è un'attività a conduzione familiare dove ogni membro gioca un ruolo fondamentale. La nostra forza sta nella coesione e nella capacità di lavorare insieme come una squadra affiatata.
                </p>
                <p className="text-gray-700 mb-4">
                  Dalle ricette tradizionali tramandate dai nonni alle nuove idee delle generazioni più giovani, il nostro team riesce a fondere esperienza e innovazione, creando un'offerta gastronomica che rispetta la tradizione ma sa anche sorprendere.
                </p>
                <p className="text-gray-700">
                  La gestione familiare ci permette di mantenere alti standard qualitativi e di creare un ambiente accogliente dove ogni cliente si sente parte della nostra famiglia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 bg-secondary text-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Il Nostro <span className="text-highlight font-caveat">Impegno</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg flex-1 basis-64">
              <h3 className="text-xl font-bold mb-3 text-highlight">Qualità garantita</h3>
              <p className="text-white/90">
                Selezioniamo personalmente ogni ingrediente per garantire che solo il meglio arrivi sulle vostre tavole.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg flex-1 basis-64">
              <h3 className="text-xl font-bold mb-3 text-highlight">Tradizione locale</h3>
              <p className="text-white/90">
                Preserviamo i sapori autentici della cucina napoletana, mantenendo vive ricette che raccontano la nostra terra.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg flex-1 basis-64">
              <h3 className="text-xl font-bold mb-3 text-highlight">Ospitalità</h3>
              <p className="text-white/90">
                Ci impegniamo a creare un ambiente accogliente dove ogni cliente si senta a casa.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-5 rounded-lg flex-1 basis-64">
              <h3 className="text-xl font-bold mb-3 text-highlight">Innovazione</h3>
              <p className="text-white/90">
                Pur rispettando la tradizione, non smettiamo mai di sperimentare e migliorare le nostre proposte culinarie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-bg">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Vieni a trovarci a 8&90
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Ti aspettiamo per farti assaporare i nostri piatti e farti sentire parte della nostra famiglia
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/menu" 
                  className="px-8 py-3 bg-primary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>Scopri il Menu</span>
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/contatti" 
                  className="px-8 py-3 bg-secondary hover:bg-accent-light text-white font-semibold rounded-md transition duration-300"
                >
                  Contattaci
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;