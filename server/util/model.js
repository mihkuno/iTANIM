import Account from '../model/Account.js';
import Order from '../model/Order.js';
import Product from '../model/Product.js';
import Request from '../model/Request.js';
import Vendor from '../model/Vendor.js';
import Server from '../util/server.js';

/**
 * Define model relationships
 */
const relation = function () {
	// Define the relationship between models
	Product.belongsToMany(Order, { through: 'Transaction' });
	Order.belongsToMany(Product, { through: 'Transaction' });
	Account.hasMany(Order);
	Order.belongsTo(Account);
	Account.hasMany(Request);
	Request.belongsTo(Account);
	Account.hasOne(Vendor);
	Vendor.belongsTo(Account);
	Vendor.hasMany(Product);
	Product.belongsTo(Vendor);
};

/**
 * Create the model to database sync object
 * @param {Object} options
 */
const sync = function () {
	try {
		relation();
		// Synchronize the models with the database
		Server.session.sync(Server.options);
	} catch (error) {
		// If the setup fails, log the error
		console.log(`${error.name}: ${error.message}`);
	}

	return session;
};

/**
 * Setup the model synchronization with the database
 * @param {Object} options
 */
const setup = async function () {
	relation();
	Server.options.force = true;
	await Server.session.sync(Server.options);
	await Server.session.close();
};

const Model = { setup, sync };
export default Model;
