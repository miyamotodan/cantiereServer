import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Cantiere = sequelize.define('Cantiere', {
  id_cantiere: { // Corrisponde a 'id_cantiere' nella tua definizione
    type: DataTypes.INTEGER, // Nota: DataTypes.INTEGER è più comune per gli ID numerici
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Generalmente si usa per gli ID primary key per farli generare automaticamente dal DB
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  indirizzo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_inizio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data_fine_prevista: {
    type: DataTypes.DATE,
    allowNull: true // Potrebbe essere null se non ancora definita
  },
  descrizione: {
    type: DataTypes.STRING,
    allowNull: true
  },
  stato: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipologia: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  // Opzioni del modello
  tableName: 'cantieri' // Nome della tabella nel database
});

export default Cantiere;