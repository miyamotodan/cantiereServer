import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const AttivitaPianificata = sequelize.define('AttivitaPianificata', {
  id_attivita: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: false,
    primaryKey: true,
    // autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_piano: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: false,
  },
  id_lavorazione_progetto: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: false,
  },
  data_ora_inizio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data_ora_fine: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  priorita: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  stato: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pianificata',
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
  tableName: 'attivita_pianificata' // Nome della tabella nel database
});

export default AttivitaPianificata;