import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const UtilizzoStandard = sequelize.define('UtilizzoStandard', {
  id_utilizzo_standard: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_lavorazione_anagrafica: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  id_strumento_anagrafica: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  quantita_standard: {
    type: DataTypes.INTEGER, 
    allowNull: true,
    defaultValue: 1,
  },
  obbligatorio_standard: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  modalita_utilizzo_standard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  note: {
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
  tableName: 'utilizzi_standard' // Nome della tabella nel database
});

export default UtilizzoStandard;