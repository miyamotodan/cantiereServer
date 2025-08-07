import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const StrumentoAnagrafica = sequelize.define('StrumentoAnagrafica', {
  id_strumento_anagrafica: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  nome_strumento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Il nome dello strumento potrebbe essere unico
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: true
  },
  richiede_certificazione: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Di default non richiede certificazione
  },
  descrizione_uso: {
    type: DataTypes.STRING,
    allowNull: true
  },
  specifiche_tecniche: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: { // Campi gestiti automaticamente da Sequelize
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: { // Campi gestiti automaticamente da Sequelize
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Opzioni del modello
  tableName: 'strumenti_anagrafica' // Nome della tabella nel database
});

export default StrumentoAnagrafica;