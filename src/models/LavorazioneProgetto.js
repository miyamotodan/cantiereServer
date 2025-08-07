import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const LavorazioneProgetto = sequelize.define('LavorazioneProgetto', {
  id_lavorazione_progetto: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_cantiere: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  id_lavorazione_anagrafica: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  nome_specifico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  durata_stimata_ore: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  livello_rischio_progetto: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
  note_specifiche: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  attiva: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
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
  tableName: 'lavorazioni_progetto' // Nome della tabella nel database
});

export default LavorazioneProgetto;