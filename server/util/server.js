import { Sequelize } from 'sequelize';
/**
 * The user credentials to connect the database
 */
const credentials = {
	database: 'DB_ITANIM',
	username: 'root',
	password: 'password',
};

/**
 * The connection options of the model to the database
 */
const options = {
	host: 'localhost',
	dialect: 'mysql',
	define: {
		// disable auto-generated timestamp columns
		timestamps: false,
		// make table names same as model
		freezeTableName: true,
	},
	// Create a pool of connections for improved performance
	pool: {
		max: 10, // Maximum number of connections in pool
		min: 0, // Minimum number of connections in pool
		acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
		idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released
	},
};

/**
 * The session object to the database
 * @type {Sequelize}
 */
const session = new Sequelize(
	credentials.database,
	credentials.username,
	credentials.password,
	options
);

/**
 * Check the database connection
 * returns {boolean} connection status of the database
 */
const connection = async () => {
	const connect = new Sequelize('', credentials.username, credentials.password, options);
	await connect.authenticate();

	return connect;
};

const Server = { session, options, credentials, connection };

export default Server;
