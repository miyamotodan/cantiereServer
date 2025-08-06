import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Ditta = sequelize.define('Ditta', {
  id_ditta: { // Corrisponde a 'id_ditta' nella tua definizione
    type: DataTypes.NUMBER, // Nota: DataTypes.INTEGER è più comune per gli ID numerici
    allowNull: false,
    primaryKey: true,
    // autoIncrement: true // Generalmente si usa per gli ID primary key per farli generare automaticamente dal DB
  },
  ragione_sociale: {
    type: DataTypes.STRING,
    allowNull: false
  },
  partita_iva: {
    type: DataTypes.STRING,
    unique: true, // La Partita IVA dovrebbe essere unica
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true // Il telefono potrebbe non essere obbligatorio
  },
  email: {
    type: DataTypes.STRING,
    unique: true, // L'email dovrebbe essere unica
    allowNull: true // L'email potrebbe non essere obbligatoria
  },
  indirizzo_sede: {
    type: DataTypes.STRING,
    allowNull: true
  },
  attiva: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true // Di default una ditta è attiva
  },
  createdAt: { // Sequelize gestisce automaticamente questi campi
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: { // Sequelize gestisce automaticamente questi campi
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  // Opzioni del modello
  tableName: 'ditte' // Nome della tabella nel database
});

export default Ditta;