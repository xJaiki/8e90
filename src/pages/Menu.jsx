import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, AlertCircle, Loader, UtensilsCrossed, Coffee, Pizza, Instagram, Calendar, Utensils } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Menu = () => {
    const [menuData, setMenuData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    // SEO optimization - set page title and meta description
    useEffect(() => {
        document.title = 'Menu - 8&90 Rosticceria e Tavola Calda Napoletana';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute(
                'content',
                'Scopri il nostro menu di specialità napoletane: panini, pizza, dolci e molto altro. Piatti preparati con ingredienti freschi e ricette tradizionali.'
            );
        }
    }, []);

    // Fetch menu data from API
    useEffect(() => {
        const fetchMenuData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://go.nordqr.com/y9kx8q/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch menu data');
                }
                const data = await response.json();
                console.log('Menu data:', data);
                setMenuData(data);

                // Set the first menu section as active by default
                if (data.menu_n && data.menu_n.length > 0 && data.menu_n[0].section_n && data.menu_n[0].section_n.length > 0) {
                    setActiveCategory(data.menu_n[0].section_n[0].id);
                }
            } catch (err) {
                console.error('Error fetching menu:', err);
                setError(err.message);
                toast.error('Errore nel caricamento del menu. Riprova più tardi.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    // Handle category click
    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);

        // Smooth scroll to the category section
        const element = document.getElementById(`category-${categoryId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Get unique categories from the menu data
    const getMenuCategories = () => {
        if (!menuData || !menuData.menu_n) return [];

        const categories = [];
        menuData.menu_n.forEach(menu => {
            if (menu.section_n) {
                menu.section_n.forEach(section => {
                    if (section.i18n && section.i18n.it && section.i18n.it.title) {
                        categories.push({
                            id: section.id,
                            title: section.i18n.it.title,
                            icon: getCategoryIcon(section.i18n.it.title)
                        });
                    }
                });
            }
        });

        return categories;
    };

    // Get suitable icon for category based on name
    const getCategoryIcon = (categoryName) => {
        const name = categoryName.toLowerCase();
        if (name.includes('panini')) return <UtensilsCrossed size={18} />;
        if (name.includes('pizza')) return <Pizza size={18} />;
        if (name.includes('dolci')) return <Coffee size={18} />;
        return <UtensilsCrossed size={18} />;
    };

    return (
        <div className="min-h-screen bg-bg">
            {/* Menu Header */}
            <section className="relative py-12 bg-secondary">
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-repeat" style={{ backgroundImage: 'url("/backgrounds/pattern.png")' }}></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Il Nostro <span className="font-caveat">Menu</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Scopri i sapori autentici della tradizione napoletana.
                            Ogni piatto racconta una storia e porta in tavola l'amore per la nostra terra.
                        </p>
                    </div>
                </div>
            </section>

            {/* Loading State */}
            {isLoading && (
                <div className="flex flex-col items-center justify-center py-20">
                    <Loader size={40} className="text-primary animate-spin mb-4" />
                    <p className="text-lg text-secondary">Caricamento del menu in corso...</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="flex flex-col items-center justify-center py-20">
                    <AlertCircle size={40} className="text-red-500 mb-4" />
                    <h2 className="text-xl font-bold text-secondary mb-2">Ops, qualcosa è andato storto!</h2>
                    <p className="text-lg text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-accent-dark transition-colors"
                    >
                        Riprova
                    </button>
                    <button
                        onClick={() => window.href = "https://go.nordqr.com/y9kx8q"}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-accent-dark transition-colors"
                    >
                        Vedi su NordQR
                    </button>
                </div>
            )}

            {/* Menu Content */}
            {!isLoading && !error && menuData && (
                <>
                    {/* Daily Tavola Calda Offerings */}
                    <section className="py-10 px-4 bg-bg">
                        <div className="container mx-auto">
                            <div className="bg-white bg-opacity-10 rounded-lg p-6 md:p-8 border-2 border-accent-light shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-accent-light text-white px-4 py-2 rounded-bl-lg font-bold">
                                    Speciale Pranzo
                                </div>
                                
                                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                                    <div className="bg-accent-light rounded-full p-3 mb-4 md:mb-0 md:mr-6 text-white">
                                        <Utensils size={32} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                                            Tavola Calda - Menu del Giorno
                                        </h2>
                                        <p className="text-lg text-gray-700 mt-1">
                                            Primi, secondi e contorni preparati ogni giorno con ingredienti freschi
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div className="bg-white rounded-lg p-4 shadow-md">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-accent-light w-8 h-8 rounded-full flex items-center justify-center text-white mr-3">
                                                <span className="font-bold">1</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary">Primi Piatti</h3>
                                        </div>
                                        <p className="text-gray-700">
                                            Pasta fresca, risotti e zuppe della tradizione napoletana, preparati con cura e ingredienti locali.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white rounded-lg p-4 shadow-md">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-accent-light w-8 h-8 rounded-full flex items-center justify-center text-white mr-3">
                                                <span className="font-bold">2</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary">Secondi Piatti</h3>
                                        </div>
                                        <p className="text-gray-700">
                                            Selezione di carne, pesce e piatti vegetariani, cucinati secondo le ricette della tradizione napoletana.
                                        </p>
                                    </div>
                                    
                                    <div className="bg-white rounded-lg p-4 shadow-md">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-accent-light w-8 h-8 rounded-full flex items-center justify-center text-white mr-3">
                                                <span className="font-bold">3</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-primary">Contorni</h3>
                                        </div>
                                        <p className="text-gray-700">
                                            Verdure di stagione preparate secondo ricette tradizionali, perfette per accompagnare i nostri piatti.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="bg-white rounded-lg p-5 shadow-md border-l-4 border-accent-light">
                                    <div className="flex items-start">
                                        <Calendar size={22} className="text-accent-light mt-1 mr-3 flex-shrink-0" />
                                        <p className="text-gray-700">
                                            <span className="font-bold text-secondary">Il nostro menu varia ogni giorno</span> in base alla disponibilità di ingredienti freschi e stagionali. Proponiamo sempre opzioni diverse per accontentare tutti i gusti.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-start mt-4">
                                        <Instagram size={22} className="text-accent-light mt-1 mr-3 flex-shrink-0" />
                                        <p className="text-gray-700">
                                            <span className="font-bold text-secondary">Seguici su Instagram</span> per scoprire in anteprima il menu del giorno e tutte le nostre specialità:
                                            <a 
                                                href="https://www.instagram.com/tavolacalda_paninoteca_8e90/" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="ml-2 text-accent-dark hover:underline font-medium"
                                            >
                                                @tavolacalda_paninoteca_8e90
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Custom Offerings */}
                    <section className="py-10 px-4">
                        <div className="container mx-auto">
                            <div className="bg-white rounded-lg p-6 md:p-8 border-l-4 border-primary shadow-md">
                                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4 flex items-center">
                                    <UtensilsCrossed size={24} className="mr-3 text-primary" />
                                    Piatti Personalizzati
                                </h2>
                                <p className="text-gray-700 text-lg mb-3">
                                    Non trovi quello che cerchi nel menu? Da 8&90 realizziamo anche preparazioni su richiesta!
                                </p>
                                <div className="space-y-3 mt-4">
                                    <div className="flex items-start">
                                        <div className="bg-primary rounded-full p-1 mt-1 mr-3">
                                            <Clock size={16} className="text-white" />
                                        </div>
                                        <p className="text-gray-700">Piatti della tradizione napoletana disponibili con preavviso</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-primary rounded-full p-1 mt-1 mr-3">
                                            <Clock size={16} className="text-white" />
                                        </div>
                                        <p className="text-gray-700">Preparazioni per eventi speciali, feste e cerimonie</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-primary rounded-full p-1 mt-1 mr-3">
                                            <Clock size={16} className="text-white" />
                                        </div>
                                        <p className="text-gray-700">Adattamento di ricette per esigenze alimentari specifiche</p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="tel:+3908118020573 "
                                        className="inline-flex items-center text-primary font-medium hover:text-accent-dark transition-colors"
                                    >
                                        Chiama per informazioni
                                        <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Menu Sections */}
                    <section className="py-10 px-4">
                        <div className="container mx-auto">
                            {menuData.menu_n.map((menu, menuIndex) => (
                                <div key={menuIndex}>
                                    {menu.section_n && menu.section_n.map((section, sectionIndex) => (
                                        <div
                                            key={sectionIndex}
                                            id={`category-${section.id}`}
                                            className="mb-20 scroll-mt-40"
                                        >
                                            <div className="text-center mb-12">
                                                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3 inline-flex items-center">
                                                    {getCategoryIcon(section.i18n.it.title)}
                                                    <span className="ml-3">{section.i18n.it.title}</span>
                                                </h2>
                                                <div className="w-24 h-1 bg-accent-light mx-auto mt-4"></div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {section.dish_n && section.dish_n.map((dish, dishIndex) => (
                                                    <div
                                                        key={dishIndex}
                                                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
                                                    >
                                                        <div className="p-6 flex-grow">
                                                            <div className="flex justify-between items-start mb-3">
                                                                <h3 className="text-xl font-bold text-primary">{dish.i18n.it.title}</h3>
                                                                <span className="font-bold text-secondary">€{dish.price_1.toFixed(2)}</span>
                                                            </div>
                                                            <div className="border-t border-gray-100 pt-3">
                                                                <p className="text-gray-700">{dish.i18n.it.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="container mx-auto ">
                            <div className="bg-white rounded-lg p-6 md:p-8 border-l-4 border-primary shadow-md">
                                <div className="p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
                                        Informazioni sul Menu
                                    </h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-semibold text-primary mb-3">I Nostri Ingredienti</h3>
                                            <p className="text-gray-700 mb-4">
                                                Utilizziamo solo ingredienti freschi e di qualità, molti dei quali provenienti da produttori locali della Campania.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-primary mb-3">Allergeni e Diete</h3>
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

                        <div className="container mx-auto px-4 py-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Voglia di <span className="text-highlight">8&90</span>?
                            </h2>
                            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
                                Vieni a trovarci o ordina comodamente da casa
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    to="/contatti"
                                    className="px-8 py-3 bg-secondary hover:bg-accent-dark text-white font-semibold rounded-md transition duration-300 flex items-center justify-center gap-2"
                                >
                                    <span>Trova il Locale</span>
                                    <ArrowRight size={18} />
                                </Link>
                                <a
                                    href="tel:+3908118020573 "
                                    className="px-8 py-3 bg-white text-primary hover:bg-gray-100 font-semibold rounded-md transition duration-300"
                                >
                                    Ordina Telefonicamente
                                </a>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Menu;