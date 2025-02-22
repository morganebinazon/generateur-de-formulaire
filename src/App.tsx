import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('Filière');

  // Contenus conditionnels basés sur la section active
  const renderContent = () => {
    switch (activeSection) {
      case 'Filière':
        return <FormulairePrincipal />;
      case 'Class':
        return <FormulaireFille title="Formulaire Class" />;
      case 'Étudiant':
        return <FormulaireFille title="Formulaire Étudiant" />;
      default:
        return <p>Veuillez sélectionner une section.</p>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Menu latéral */}
      <aside className="w-1/4 bg-gray-100 p-4 shadow-md">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveSection('Filière')}
              className={`w-full text-left p-2 rounded ${
                activeSection === 'Filière' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              Filière
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('Class')}
              className={`w-full text-left p-2 rounded ${
                activeSection === 'Class' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              Class
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('Étudiant')}
              className={`w-full text-left p-2 rounded ${
                activeSection === 'Étudiant' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`}
            >
              Étudiant
            </button>
          </li>
        </ul>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 bg-white p-6">
        <h1 className="text-2xl font-bold mb-6">{activeSection}</h1>
        {renderContent()}
      </main>
    </div>
  );
}

// Composant pour le formulaire principal
const FormulairePrincipal = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="filiere" className="block mb-2 font-bold">
        Nom de la filière
      </label>
      <input
        type="text"
        id="filiere"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Entrez le nom de la filière"
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Soumettre
    </button>
  </form>
);

// Composant pour les formulaires filles
const FormulaireFille = ({ title }) => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-2 font-bold">
          {title} - Nom
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder={`Entrez le nom pour ${title.toLowerCase()}`} />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Soumettre
      </button>
    </form>
  );
};

export default App;