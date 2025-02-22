import React, { useState } from 'react';

// Définition des types pour les champs de formulaire
type FormField = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select';
  placeholder?: string;
  options?: { label: string; value: string }[];  // Options pour un champ de type 'select'
};

// Définition des props pour FormGenerator
type FormGeneratorProps = {
  formConfig: FormField[];  // La configuration des champs de formulaire
};

export const FormGenerator: React.FC<FormGeneratorProps> = ({ formConfig }) => {
  // Initialisation de l'état formData avec les noms des champs
  const [formData, setFormData] = useState<Record<string, string>>(() =>
    formConfig.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as Record<string, string>)  // On précise le type d'objet vide ici
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formConfig.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="block mb-2 font-bold">
            {field.label}
          </label>
          {field.type === 'text' && (
            <input
              type="text"
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={field.placeholder}
            />
          )}
          {field.type === 'number' && (
            <input
              type="number"
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder={field.placeholder}
            />
          )}
          {field.type === 'select' && field.options && (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              {field.options.map((option, idx) => (
                <option key={idx} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Soumettre
      </button>
    </form>
  );
};
