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

const Product = Server.session.define('Product', fields);

export default Product;
