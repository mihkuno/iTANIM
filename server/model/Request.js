import { DataTypes } from 'sequelize';
import Server from '../util/server.js';

const fields = {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},

	remote_address: {
		type: DataTypes.STRING(25),
		allowNull: false,
	},

	authenticated: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},

	message: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},

	method: {
		type: DataTypes.ENUM('GET', 'POST', 'PUT', 'DELETE'),
		allowNull: false,
	},

	url: {
		type: DataTypes.STRING(255),
		allowNull: false,
	},

	status: {
		type: DataTypes.CHAR(3),
		allowNull: false,
	},

	response_time: {
		type: DataTypes.FLOAT.UNSIGNED,
		allowNull: false,
	},

	total_time: {
		type: DataTypes.FLOAT.UNSIGNED,
		allowNull: false,
	},

	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
};

const Request = Server.session.define('Request', fields);

export default Request;
