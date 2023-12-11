import { DataTypes } from 'sequelize';
import Server from '../util/server.js';

const fields = {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},

	created_at: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW,
	},
};

const Vendor = Server.session.define('Vendor', fields);

export default Vendor;
