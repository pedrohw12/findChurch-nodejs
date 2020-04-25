const server = require('./app');
const port = process.env.PORT;

server.listen(process.env.PORT || port);
