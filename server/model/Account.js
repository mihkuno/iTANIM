import { DataTypes } from 'sequelize';
import Server from '../util/server.js';

const fields = {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},

	first_name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},

	last_name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},

	contact_no: {
		type: DataTypes.CHAR(10),
		allowNull: true,
	},

	email: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},

	coordinates: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},

	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
};

const Account = Server.session.define('Account', fields);

export default Account;
