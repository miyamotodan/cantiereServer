import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true // Generalmente si usa per gli ID primary key per farli generare automaticamente dal DB
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});

export default User;