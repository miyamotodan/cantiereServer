import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
// Non è necessario importare Ditta e Cantiere qui per la definizione del modello
// ma sarà necessario per definire le associazioni nel server.js o in un file di associazione separato.

const PartecipazioneDitta = sequelize.define('PartecipazioneDitta', {
  id_partecipazione: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
    autoIncrement: true // Considera di abilitarlo se l'ID è generato automaticamente dal DB
  },
  id_ditta: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    // Qui non si definisce la relazione diretta, ma il tipo di dato della FK
  },
  id_cantiere: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    // Qui non si definisce la relazione diretta, ma il tipo di dato della FK
  },
  data_inizio_partecipazione: {
    type: DataTypes.DATE,
    allowNull: false
  },
  data_fine_partecipazione: {
    type: DataTypes.DATE,
    allowNull: true // Potrebbe essere null se la partecipazione è ancora in corso
  },
  ruolo_ditta: {
    type: DataTypes.STRING,
    allowNull: false
  },
  responsabile_cantiere: {
    type: DataTypes.STRING,
    allowNull: true // Potrebbe essere null se non ancora assegnato
  },
  budget_assegnato: {
    type: DataTypes.DECIMAL(10, 2), // Esempio: 10 cifre totali, 2 decimali
    allowNull: true // Il budget potrebbe essere null inizialmente
  },
  stato_partecipazione: {
    type: DataTypes.STRING,
    allowNull: false
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
  tableName: 'partecipazioni_ditta' // Nome della tabella nel database
});

export default PartecipazioneDitta;