import React, { useEffect, useState } from 'react';

const DisplayFormData = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Faire une requête GET pour récupérer les données
    fetch('http://localhost:5000/get-forms')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div>
      <h1>Données des formulaires</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.filiere} - {item.className} - {item.studentName} ({item.studentAge} ans)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayFormData;
