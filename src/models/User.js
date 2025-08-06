import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey:true
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