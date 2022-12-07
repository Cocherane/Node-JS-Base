require('dotenv').config();

const Server = require('./models/server');

// instance Server
const server = new Server();

// call listen on Server
server.listen();




