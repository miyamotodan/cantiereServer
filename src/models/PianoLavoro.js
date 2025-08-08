import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const PianoLavoro = sequelize.define('PianoLavoro', {
  id_piano: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_cantiere: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    // La relazione effettiva verrà definita in server.js o in un file di associazione
  },
  nome_piano: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descrizione: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  versione: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    defaultValue: 1, // Versione iniziale
  },
  stato: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Bozza', // Stato iniziale del piano
  },
  createdAt: { // Campi gestiti automaticamente da Sequelize
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: { // Campi gestiti automaticamente da Sequelize
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  // Opzioni del modello
  tableName: 'piani_lavoro' // Nome della tabella nel database
});

export default PianoLavoro;