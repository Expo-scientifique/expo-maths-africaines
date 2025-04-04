import React, { useState } from 'react';
import { X } from 'lucide-react';

const MathAfriqueThroughTime = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  
  // Ajout des styles pour l'animation et motifs africains
  
  
  // Données des éléments mathématiques africains
  const mathElements = [
    {
      id: 1,
      title: "Os d'Ishango",
      region: "République Démocratique du Congo",
      date: "-20000",
      coordinates: { x: 213, y: 340 },
      image: "/api/placeholder/300/200",
      description: "Le bâton d'Ishango est un os découvert avec un ensemble d'encoches organisées en groupes. Datant d'environ 20 000 ans, il représente potentiellement l'un des plus anciens exemples de notation mathématique et pourrait être un outil de calcul primitif."
    },
    {
      id: 2,
      title: "Village Ba-ila",
      region: "Zambie",
      date: "1600",
      coordinates: { x: 224, y: 370 },
      image: "/api/placeholder/300/200",
      description: "Ce village présente une structure fractale: vu du dessus, l'ensemble de maisons a la même forme qu'une maison. Ces concepts de récursivité et d'autosimilarité sont fondamentaux en mathématiques modernes."
    },
    {
      id: 3,
      title: "Dessins sur le sable",
      region: "Vanuatu, Océanie",
      date: "-500",
      coordinates: { x: 345, y: 250 },
      image: "/api/placeholder/300/200",
      description: "Tradition de dessins géométriques complexes tracés d'un seul trait. Ces dessins contiennent des concepts mathématiques avancés comme les graphes eulériens et les symétries."
    },
    {
      id: 4,
      title: "Lamelles de bambou de Tsinghua",
      region: "Chine (influence africaine)",
      date: "-305",
      coordinates: { x: 365, y: 280 },
      image: "/api/placeholder/300/200",
      description: "Bien que d'origine chinoise, ces lamelles montrent des méthodes de calcul similaires à celles développées en Afrique du Nord. Elles présentent la plus ancienne table de multiplication en base 10 connue."
    },
    {
      id: 5,
      title: "Papyrus mathématiques égyptiens",
      region: "Égypte",
      date: "-1650",
      coordinates: { x: 240, y: 280 },
      image: "/api/placeholder/300/200",
      description: "Les papyrus de Rhind et de Moscou contiennent des problèmes mathématiques montrant des calculs de volumes, aires, et proportions. L'Égypte ancienne a développé un système numérique sophistiqué et des méthodes géométriques pour l'architecture."
    },
    {
      id: 6,
      title: "Tracés Sona",
      region: "Angola",
      date: "1200",
      coordinates: { x: 190, y: 350 },
      image: "/api/placeholder/300/200", 
      description: "Dessins géométriques tracés dans le sable par les Tchokwe. Ces dessins, réalisés d'un trait continu, illustrent des concepts de théorie des graphes avant leur formalisation par les mathématiques occidentales."
    },
    {
      id: 7,
      title: "Géométrie des textiles africains",
      region: "Divers (Ghana, Mali, Nigeria)",
      date: "1000",
      coordinates: { x: 160, y: 315 },
      image: "/api/placeholder/300/200",
      description: "Les motifs des tissus Kente, Bogolan et autres textiles africains contiennent des concepts géométriques complexes incluant symétries, translations et réflexions, formant de véritables groupes de transformations."
    }
  ];
  
  // Conversion des dates pour la timeline
  const timelineData = mathElements.map(item => ({
    id: item.id,
    date: parseInt(item.date),
    title: item.title
  })).sort((a, b) => a.date - b.date);
  
  // Trouver la date la plus ancienne et récente pour l'échelle
  const oldestDate = Math.min(...timelineData.map(item => item.date));
  const newestDate = Math.max(...timelineData.map(item => item.date));
  const timeRange = newestDate - oldestDate;
  
  // Calculer la position sur la timeline
  const getPositionOnTimeline = (date) => {
    return ((date - oldestDate) / timeRange) * 100;
  };
  
  // Formatage des dates pour l'affichage
  const formatDate = (date) => {
    if (date < 0) {
      return Math.abs(date) + " av. J.-C.";
    } else {
      return date + " apr. J.-C.";
    }
  };
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  
  const handleTimelineClick = (id) => {
    const item = mathElements.find(element => element.id === id);
    setSelectedItem(item);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      
      {/* Titre avec design amélioré */}
      <div className="bg-gradient-to-r from-amber-700 to-red-800 text-white p-6 shadow-lg african-pattern-header">
        <h1 className="text-3xl font-bold text-center">Mathématiques Africaines à Travers les Âges</h1>
        <p className="text-center mt-2 text-amber-100">Découvrez l'héritage mathématique africain et ses contributions à la science</p>
      </div>
      
      <div className="flex flex-1 p-4 gap-4">
        {/* Carte de l'Afrique avec design amélioré */}
        <div className="w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
          <div className="bg-gradient-to-r from-amber-100 to-orange-50 p-4 flex items-center">
            <div className="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" className="w-full h-full" fill="#ca8a04">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-amber-900">Carte des Découvertes</h2>
          </div>
          <div className="relative h-80 p-4 mud-cloth-pattern">
            {/* Contour amélioré de l'Afrique avec dégradé */}
            <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow">
              <defs>
                <linearGradient id="africaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <path d="M150,100 Q220,80 260,120 Q320,150 330,220 Q350,300 300,370 Q250,420 180,400 Q120,390 100,300 Q90,200 150,100" 
                    fill="url(#africaGradient)" 
                    stroke="#b45309" 
                    strokeWidth="2" />
              
              {/* Points des découvertes avec animation au survol */}
              {mathElements.map(item => (
                <g key={item.id} className="cursor-pointer">
                  <circle 
                    cx={item.coordinates.x} 
                    cy={item.coordinates.y} 
                    r={selectedItem && selectedItem.id === item.id ? 8 : 6}
                    fill={selectedItem && selectedItem.id === item.id ? "#b91c1c" : "#b45309"}
                    stroke="#fff"
                    strokeWidth="2"
                    className="transition-all duration-300 hover:r-8"
                    onClick={() => handleItemClick(item)}
                  />
                  {selectedItem && selectedItem.id === item.id && (
                    <circle 
                      cx={item.coordinates.x} 
                      cy={item.coordinates.y} 
                      r="12"
                      fill="none"
                      stroke="#b91c1c"
                      strokeWidth="2"
                      opacity="0.5"
                      className="animate-ping"
                    />
                  )}
                </g>
              ))}
            </svg>
            
            {/* Légende améliorée */}
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md border border-amber-200">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-amber-600 mr-2 border border-white shadow-sm"></div>
                <span className="text-amber-900">Découverte mathématique</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-700 mr-2 border border-white shadow-sm"></div>
                <span className="text-amber-900">Sélection actuelle</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Détails de l'élément sélectionné avec design amélioré */}
        <div className="w-1/2 bg-white rounded-xl shadow-lg overflow-hidden border border-amber-200">
          {selectedItem ? (
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-amber-100 to-orange-50 p-4">
                <h2 className="text-xl font-bold text-amber-900">{selectedItem.title}</h2>
                <p className="text-amber-700 mt-1">
                  {selectedItem.region} • {formatDate(parseInt(selectedItem.date))}
                </p>
              </div>
              <div className="p-4 flex-1 overflow-y-auto african-pattern-sidebar">
                <div className="mb-4 rounded-xl overflow-hidden shadow-md border-2 border-amber-600">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-48 object-cover" />
                </div>
                <p className="text-amber-900 leading-relaxed">{selectedItem.description}</p>
                <button 
                  onClick={togglePopup}
                  className="mt-6 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-md"
                >
                  Voir plus de détails
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600">
                  Sélectionnez un élément sur la carte ou la chronologie pour afficher ses détails
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Frise chronologique avec design amélioré */}
      <div className="bg-white m-4 rounded-xl shadow-lg overflow-hidden border border-amber-200">
        <div className="bg-gradient-to-r from-amber-100 to-orange-50 p-4 flex items-center">
          <div className="w-8 h-8 mr-3">
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="#ca8a04">
              <path d="M13,2.03V2.05L13,4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03M11,2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06M4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1L4.26,5.67M2.06,13C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13H2.06M7.1,18.37L5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-amber-900">Chronologie des Mathématiques Africaines</h2>
        </div>
        
        {/* Simple ligne chronologique avec dates aux extrémités */}
        <div className="relative px-6 pt-6 pb-2">
          <div className="h-2 bg-gradient-to-r from-amber-300 via-amber-600 to-amber-300 w-full rounded-full"></div>
          
          {/* Points sur la ligne uniquement */}
          {timelineData.map(item => (
            <div 
              key={item.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ 
                left: `${getPositionOnTimeline(item.date)}%`, 
                top: '1px',
              }}
              onClick={() => handleTimelineClick(item.id)}
            >
              <div 
                className={`rounded-full w-5 h-5 border-2 border-white shadow-md transition-transform duration-300 hover:scale-125 ${
                  selectedItem && selectedItem.id === item.id ? 'bg-amber-800' : 'bg-amber-600'
                }`}
              ></div>
            </div>
          ))}
          
          {/* Dates extrêmes */}
          <div className="flex justify-between text-sm text-amber-700 font-medium mt-4">
            <span>{formatDate(oldestDate)}</span>
            <span>{formatDate(newestDate)}</span>
          </div>
        </div>
        
        {/* Liste horizontale des éléments en dessous */}
        <div className="flex overflow-x-auto p-4 gap-4 pb-6 mud-cloth-pattern">
          {timelineData.map(item => (
            <div 
              key={`card-${item.id}`}
              className={`flex flex-col items-center cursor-pointer p-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                selectedItem && selectedItem.id === item.id 
                  ? 'bg-amber-100 shadow-md translate-y-[-4px]' 
                  : 'hover:bg-amber-50 hover:shadow hover:translate-y-[-2px]'
              }`}
              onClick={() => handleTimelineClick(item.id)}
              style={{ width: '140px' }}
            >
              <div className={`w-4 h-4 rounded-full mb-2 border border-white shadow-sm ${
                selectedItem && selectedItem.id === item.id ? 'bg-amber-800' : 'bg-amber-600'
              }`}></div>
              <span className="text-center font-medium text-amber-900">{item.title}</span>
              <span className="text-center text-xs text-amber-700 mt-1">{formatDate(item.date)}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popup plus subtil pour afficher les détails */}
      {showPopup && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-3/4 max-w-2xl max-h-5/6 overflow-y-auto shadow-lg border-2 border-amber-500 animate-fadeIn">
            <div className="relative">
              <div className="flex justify-between items-center bg-gradient-to-r from-amber-700 to-amber-800 text-white p-3 rounded-t-lg african-pattern-header">
                <h2 className="text-xl font-semibold">{selectedItem.title}</h2>
                <button 
                  onClick={togglePopup}
                  className="text-white hover:text-red-200 transition-colors duration-200"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 mud-cloth-pattern">
                <div className="flex items-center mb-4 text-sm text-amber-700 bg-white p-2 rounded-lg">
                  <span className="font-medium">{selectedItem.region}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(parseInt(selectedItem.date))}</span>
                </div>
                
                <div className="mb-4 bg-white p-2 rounded-lg">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-56 object-cover rounded shadow-md border-2 border-amber-500" />
                </div>
                
                <div className="mb-4 bg-white p-4 rounded-lg">
                  <h3 className="text-amber-800 font-medium mb-1 flex items-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="#b45309">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                    </svg>
                    Description
                  </h3>
                  <p className="text-amber-900 text-sm">{selectedItem.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-amber-800 font-medium mb-1 flex items-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="#b45309">
                        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
                      </svg>
                      Importance mathématique
                    </h3>
                    <p className="text-amber-900 text-sm">
                      Ces concepts ont contribué significativement au développement des mathématiques et continuent d'être étudiés pour leur approche unique des problèmes mathématiques.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-amber-800 font-medium mb-1 flex items-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="#b45309">
                        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
                      </svg>
                      Contexte culturel
                    </h3>
                    <p className="text-amber-900 text-sm">
                      Ces découvertes illustrent l'intégration profonde des mathématiques dans la vie quotidienne et les traditions des communautés africaines.
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 text-right">
                  <button 
                    onClick={togglePopup}
                    className="bg-amber-700 text-white px-4 py-1.5 rounded text-sm hover:bg-amber-800 transition-colors duration-200 shadow-md flex items-center mx-auto"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 mr-1" fill="currentColor">
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathAfriqueThroughTime;