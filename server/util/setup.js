/**
 * Run this script to synchronize and create database and tables with sequelized models.
 * Note: This will DELETE all records in the database, gone forever.
 */

import Server from './server.js';
import Model from './model.js';

// (self-executing async function)--------------------------------------------------------------------------

(async function () {
	try {
		// Test the connection to the database server
		const connect = await Server.connection();

		// Create the database if it does not exist
		await connect.query(`CREATE DATABASE ${Server.credentials.database};`);

		// Close the connection to the database
		await connect.close();

		console.log(`Successfully created the database.`);
	} catch (error) {
		// If the database already exists, ignore the error
		if (error.name == 'SequelizeDatabaseError') {
			console.log(`Already existing database.`);
		}
		// Otherwise, log the error
		else {
			console.log(`${error.name}: ${error.message}`);
			return;
		}
	}

	try {
		// Synchronize the models with the database
		await Model.setup();

		console.log(JSON.stringify(Server.credentials, null, 4));
		console.log('Successfully setup models.');
	} catch (error) {
		// If the synchronization fails, log the error
		console.log(`${error.name}: ${error.message}`);
		return;
	}
})();
