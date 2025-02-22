import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

// Créer une instance d'Express
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données (MySQL)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Remplace par ton utilisateur MySQL
  password: '',  // Remplace par ton mot de passe MySQL
  database: 'form_db',  // Assure-toi que le nom de la base est correct
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données: ', err.stack);
    return;
  }
  console.log('Connecté à la base de données avec l\'ID ', connection.threadId);
});

// Endpoint pour récupérer les données
app.get('/get-forms', (req: Request, res: Response) => {
    const query = 'SELECT * FROM forms';
  
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des données:', err);
        return res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      }
      res.status(200).json(results);  // Renvoie les données sous forme de JSON
    });
  });
  

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur tournant sur http://localhost:${port}`);
});
