import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const LavorazioneAnagrafica = sequelize.define('LavorazioneAnagrafica', {
  id_lavorazione_anagrafica: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: false,
    primaryKey: true,
    // autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  nome_lavorazione: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true // Il nome della lavorazione potrebbe essere unico
  },
  descrizione: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tipo_categoria: {
    type: DataTypes.STRING,
    allowNull: true // Potrebbe essere null o avere un valore predefinito
  },
  livello_rischio_base: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: true,
    defaultValue: 0 // Un valore predefinito per il rischio
  },
  durata_standard_ore: {
    type: DataTypes.NUMBER, // O DataTypes.INTEGER
    allowNull: true // Potrebbe essere null
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
  tableName: 'lavorazioni_anagrafica' // Nome della tabella nel database
});

export default LavorazioneAnagrafica;