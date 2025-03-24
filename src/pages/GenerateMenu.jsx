import React, { useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Save, Image, Lock, Eye, EyeOff, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';
import logo from '../assets/logoo.png';

// Password hardcodata per accedere alla pagina
const ADMIN_PASSWORD = "8e90menu2025";

const MenuGenerator = () => {
  // Stato di autenticazione
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Menu data
  const [menuDate, setMenuDate] = useState(new Date().toISOString().split('T')[0]);
  const [primiPiatti, setPrimiPiatti] = useState('Pasta al pomodoro e basilico fresco\nRisotto alla zucca e provola affumicata\nZuppa di legumi');
  const [secondiPiatti, setSecondiPiatti] = useState('Pollo alla cacciatora\nBaccalà fritto\nMelanzane alla parmigiana');
  const [contorni, setContorni] = useState('Patate al forno\nVerdure grigliate\nInsalata mista');
  const [dolci, setDolci] = useState('Torta caprese\nTiramisù\nBabà');
  const [subtitle, setSubtitle] = useState(''); // Nuovo stato per il sottotitolo
  
  // Colori personalizzabili
  const [colors, setColors] = useState({
    primary: '#804e1b',
    secondary: '#351c11',
    accent: '#d9a679',
    background: '#fff5dc',
    text: '#3a1d0f'
  });
  
  // Riferimento all'elemento da catturare come immagine
  const menuRef = useRef(null);
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Funzione per autenticare l'utente
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Accesso effettuato con successo!');
    } else {
      toast.error('Password non valida');
    }
  };
  
  // Funzione per generare l'immagine del menu
  const generateMenuImage = async () => {
    if (!menuRef.current) return;
    
    setIsGenerating(true);
    try {
      const canvas = await html2canvas(menuRef.current, {
        scale: 2,
        backgroundColor: colors.background,
        logging: false,
        useCORS: true
      });
      
      const imageUrl = canvas.toDataURL('image/png');
      setGeneratedImage(imageUrl);
      toast.success('Immagine del menu generata con successo!');
    } catch (error) {
      console.error('Errore nella generazione dell\'immagine:', error);
      toast.error('Si è verificato un errore durante la generazione dell\'immagine');
    } finally {
      setIsGenerating(false);
    }
  };
  
  // Funzione per scaricare l'immagine
  const downloadImage = () => {
    if (!generatedImage) return;
    
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `Menu_${menuDate.replace(/-/g, '_')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Immagine scaricata con successo!');
  };
  
  // Funzione per copiare l'immagine negli appunti
  const copyImageToClipboard = async () => {
    if (!generatedImage) return;
    
    try {
      const blob = await fetch(generatedImage).then(r => r.blob());
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      toast.success('Immagine copiata negli appunti!');
    } catch (error) {
      console.error('Errore nella copia dell\'immagine:', error);
      toast.error('Non è stato possibile copiare l\'immagine negli appunti. Prova a scaricarla.');
    }
  };
  
  // Funzione per formattare la data in italiano
  const formatDateIt = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('it-IT', options);
  };
  
  // Se l'utente non è autenticato, mostra la schermata di login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-secondary mb-2">Accesso Riservato</h1>
            <p className="text-gray-600">Inserisci la password per accedere al generatore di menu</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-accent-dark transition-colors duration-300 flex items-center justify-center"
            >
              <Lock size={18} className="mr-2" />
              Accedi
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-bg py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-secondary mb-8 text-center">
          Generatore Menu del Giorno
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pannello di controllo */}
          <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-primary mb-4">Inserisci i piatti del giorno</h2>
            
            <div className="space-y-6">
              {/* Data */}
              <div>
                <label htmlFor="menuDate" className="block text-gray-700 mb-1">Data del menu</label>
                <input
                  type="date"
                  id="menuDate"
                  value={menuDate}
                  onChange={(e) => setMenuDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              {/* Primi piatti */}
              <div>
                <label htmlFor="primiPiatti" className="block text-gray-700 mb-1">Primi Piatti</label>
                <small className="block text-gray-500 mb-1">Inserisci un piatto per riga</small>
                <textarea
                  id="primiPiatti"
                  value={primiPiatti}
                  onChange={(e) => setPrimiPiatti(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Inserisci un primo piatto per riga"
                />
              </div>
              
              {/* Secondi piatti */}
              <div>
                <label htmlFor="secondiPiatti" className="block text-gray-700 mb-1">Secondi Piatti</label>
                <small className="block text-gray-500 mb-1">Inserisci un piatto per riga</small>
                <textarea
                  id="secondiPiatti"
                  value={secondiPiatti}
                  onChange={(e) => setSecondiPiatti(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Inserisci un secondo piatto per riga"
                />
              </div>
              
              {/* Contorni */}
              <div>
                <label htmlFor="contorni" className="block text-gray-700 mb-1">Contorni</label>
                <small className="block text-gray-500 mb-1">Inserisci un contorno per riga</small>
                <textarea
                  id="contorni"
                  value={contorni}
                  onChange={(e) => setContorni(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Inserisci un contorno per riga"
                />
              </div>
              
              {/* Dolci */}
              <div>
                <label htmlFor="dolci" className="block text-gray-700 mb-1">Dolci (opzionale)</label>
                <small className="block text-gray-500 mb-1">Inserisci un dolce per riga</small>
                <textarea
                  id="dolci"
                  value={dolci}
                  onChange={(e) => setDolci(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Inserisci un dolce per riga"
                />
              </div>
              
              {/* Sottotitolo (Nuovo campo) */}
              <div>
                <label htmlFor="subtitle" className="block text-gray-700 mb-1">Sottotitolo (opzionale)</label>
                <small className="block text-gray-500 mb-1">Verrà mostrato nel footer del menu</small>
                <input
                  type="text"
                  id="subtitle"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Es: Buon appetito! Seguiteci sui social"
                />
              </div>
              
              {/* Personalizzazione colori */}
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Personalizzazione Colori</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="primaryColor" className="block text-gray-700 mb-1">Colore Titoli</label>
                    <input
                      type="color"
                      id="primaryColor"
                      value={colors.primary}
                      onChange={(e) => setColors({...colors, primary: e.target.value})}
                      className="w-full h-10 rounded-md cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="accentColor" className="block text-gray-700 mb-1">Colore Accento</label>
                    <input
                      type="color"
                      id="accentColor"
                      value={colors.accent}
                      onChange={(e) => setColors({...colors, accent: e.target.value})}
                      className="w-full h-10 rounded-md cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="backgroundColor" className="block text-gray-700 mb-1">Colore Sfondo</label>
                    <input
                      type="color"
                      id="backgroundColor"
                      value={colors.background}
                      onChange={(e) => setColors({...colors, background: e.target.value})}
                      className="w-full h-10 rounded-md cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="textColor" className="block text-gray-700 mb-1">Colore Testo</label>
                    <input
                      type="color"
                      id="textColor"
                      value={colors.text}
                      onChange={(e) => setColors({...colors, text: e.target.value})}
                      className="w-full h-10 rounded-md cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              {/* Azioni */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={generateMenuImage}
                  disabled={isGenerating}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent-dark transition-colors flex items-center"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      Generazione...
                    </>
                  ) : (
                    <>
                      <Image size={18} className="mr-2" />
                      Genera Immagine
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Anteprima e output */}
          <div className="lg:w-1/2 space-y-6">
            {/* Anteprima del menu */}
            <div className="bg-white rounded-lg shadow-md p-2">
              <div
                ref={menuRef}
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  fontFamily: 'Arial, sans-serif',
                  padding: '2rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  width: '100%',
                  position: 'relative',
                }}
              >
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <img src={logo} alt="8&90 Logo" style={{ height: '80px' }} />
                  </div>
                  <h1 style={{ 
                    color: colors.primary, 
                    fontSize: '2.25rem', 
                    fontWeight: 'bold',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Menu del Giorno
                  </h1>
                  <p style={{ 
                    color: colors.secondary, 
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    {formatDateIt(menuDate)}
                  </p>
                </div>
                
                {/* Decorativo */}
                <div style={{ 
                  width: '100%', 
                  height: '4px', 
                  background: colors.accent, 
                  marginBottom: '2rem',
                  borderRadius: '2px'
                }}></div>
                
                {/* Menu Items */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ 
                    color: colors.primary, 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${colors.accent}`,
                    paddingBottom: '0.5rem',
                  }}>
                    Primi Piatti
                  </h2>
                  <ul style={{ 
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {primiPiatti.split('\n').filter(item => item.trim()).map((item, index) => (
                      <li key={`primi-${index}`} style={{ 
                        padding: '0.5rem 0',
                        fontSize: '1.125rem',
                        borderBottom: index < primiPiatti.split('\n').filter(item => item.trim()).length - 1 ? 
                          `1px dashed ${colors.accent}50` : 'none'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ 
                    color: colors.primary, 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${colors.accent}`,
                    paddingBottom: '0.5rem',
                  }}>
                    Secondi Piatti
                  </h2>
                  <ul style={{ 
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {secondiPiatti.split('\n').filter(item => item.trim()).map((item, index) => (
                      <li key={`secondi-${index}`} style={{ 
                        padding: '0.5rem 0',
                        fontSize: '1.125rem',
                        borderBottom: index < secondiPiatti.split('\n').filter(item => item.trim()).length - 1 ? 
                          `1px dashed ${colors.accent}50` : 'none'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ 
                    color: colors.primary, 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    borderBottom: `2px solid ${colors.accent}`,
                    paddingBottom: '0.5rem',
                  }}>
                    Contorni
                  </h2>
                  <ul style={{ 
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {contorni.split('\n').filter(item => item.trim()).map((item, index) => (
                      <li key={`contorni-${index}`} style={{ 
                        padding: '0.5rem 0',
                        fontSize: '1.125rem',
                        borderBottom: index < contorni.split('\n').filter(item => item.trim()).length - 1 ? 
                          `1px dashed ${colors.accent}50` : 'none'
                      }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {dolci && dolci.trim() && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ 
                      color: colors.primary, 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      borderBottom: `2px solid ${colors.accent}`,
                      paddingBottom: '0.5rem',
                    }}>
                      Dolci
                    </h2>
                    <ul style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {dolci.split('\n').filter(item => item.trim()).map((item, index) => (
                        <li key={`dolci-${index}`} style={{ 
                          padding: '0.5rem 0',
                          fontSize: '1.125rem',
                          borderBottom: index < dolci.split('\n').filter(item => item.trim()).length - 1 ? 
                            `1px dashed ${colors.accent}50` : 'none'
                        }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Footer */}
                <div style={{ 
                  marginTop: '2rem',
                  padding: '1rem',
                  textAlign: 'center',
                  borderTop: `4px solid ${colors.accent}`,
                }}>
                    {subtitle && (
                    <p style={{ 
                      fontSize: '1.875rem',
                      margin: '0 0 1.5rem 0',
                    }}>
                      {subtitle}
                    </p>
                  )}
                  <p style={{ 
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    margin: 0
                  }}>
                    8&90 Rosticceria e Tavola Calda
                  </p>
                  
                  <p style={{ 
                    fontSize: '0.875rem',
                    margin: '0.5rem 0 0 0'
                  }}>
                    Corso Europa 88, Marano di Napoli (NA) • Tel: 081 1802 0573
                  </p>
                </div>
              </div>
            </div>
            
            {/* Azioni per l'immagine generata */}
            {generatedImage && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-secondary mb-4">Immagine Generata</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={downloadImage}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-accent-dark transition-colors flex items-center"
                  >
                    <Save size={18} className="mr-2" />
                    Scarica Immagine
                  </button>
                  
                  <button
                    onClick={copyImageToClipboard}
                    className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-accent-dark transition-colors flex items-center"
                  >
                    <Copy size={18} className="mr-2" />
                    Copia negli Appunti
                  </button>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    Puoi scaricare l'immagine o copiarla negli appunti per condividerla facilmente sui social media o inviarla via WhatsApp.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuGenerator;