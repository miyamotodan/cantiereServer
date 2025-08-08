import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Assegnazione = sequelize.define('Assegnazione', {
  id_assegnazione: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_operaio: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  id_attivita: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  id_partecipazione_ditta: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  notifica_inviata: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  notifica_confermata: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  note_operaio: {
    type: DataTypes.STRING,
    allowNull: true,
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
  tableName: 'assegnazioni' // Nome della tabella nel database
});

export default Assegnazione;