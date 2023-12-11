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

const Order = Server.session.define('Order', fields);

export default Order;
