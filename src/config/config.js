
const path = require('path');
process.env.NODE_CONFIG_DIR = path.join(__dirname, '../config'); // ideally this should be first line before any other module acceess config

console.log('process.env.NODE_CONFIG_DIR', process.env.NODE_CONFIG_DIR);
const config = require('config');

module.exports = () => {
    if (!(config.get('MongoDb.userName') && config.get('MongoDb.password'))) {
        console.error('Databse User name or password not provided');
        throw new Error('Databse User name or password not provided');
    }

};

