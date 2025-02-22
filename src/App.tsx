import React, { useState } from 'react';
import { FormGenerator } from './FormGenerator';  // Avec des accolades car c'est une exportation nommée



const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'Filière' | 'Class' | 'Étudiant'>('Filière');

  // Définir la configuration du formulaire pour chaque section
  const filiereFormConfig = [
    {
      name: 'filiere',
      label: 'Nom de la filière',
      type: 'text',
      placeholder: 'Entrez le nom de la filière',
    },
  ];

  const classFormConfig = [
    {
      name: 'className',
      label: 'Nom de la classe',
      type: 'text',
      placeholder: 'Entrez le nom de la classe',
    },
    {
      name: 'classSize',
      label: 'Nombre d\'étudiants',
      type: 'number',
      placeholder: 'Entrez le nombre d\'étudiants',
    },
  ];

  const etudiantFormConfig = [
    {
      name: 'studentName',
      label: 'Nom de l\'étudiant',
      type: 'text',
      placeholder: 'Entrez le nom de l\'étudiant',
    },
    {
      name: 'studentAge',
      label: 'Âge de l\'étudiant',
      type: 'number',
      placeholder: 'Entrez l\'âge de l\'étudiant',
    },
  ];

  // Contenus conditionnels basés sur la section active
  const renderContent = () => {
    switch (activeSection) {
      case 'Filière':
        return <FormGenerator formConfig={filiereFormConfig} />;
      case 'Class':
        return <FormGenerator formConfig={classFormConfig} />;
      case 'Étudiant':
        return <FormGenerator formConfig={etudiantFormConfig} />;
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
              className={`w-full text-left p-2 rounded ${activeSection === 'Filière' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Filière
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('Class')}
              className={`w-full text-left p-2 rounded ${activeSection === 'Class' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            >
              Class
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveSection('Étudiant')}
              className={`w-full text-left p-2 rounded ${activeSection === 'Étudiant' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
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
};

export default App;
