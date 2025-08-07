import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Operaio = sequelize.define('Operaio', {
  id_operaio: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_ditta: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    // La relazione effettiva verrà definita in server.js o in un file di associazione
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cognome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codice_fiscale: {
    type: DataTypes.STRING,
    unique: true, // Il Codice Fiscale dovrebbe essere unico
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true, // L'email dovrebbe essere unica
    allowNull: true
  },
  data_nascita: {
    type: DataTypes.DATE,
    allowNull: true // Potrebbe essere null se non disponibile
  },
  qualifiche: {
    type: DataTypes.STRING,
    allowNull: true // Le qualifiche possono essere opzionali
  },
  attivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true // Di default un operaio è attivo
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
  tableName: 'operai' // Nome della tabella nel database
});

export default Operaio;