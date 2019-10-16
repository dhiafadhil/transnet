'use strict';
const http = require('http');
const port = process.env.PORT || '3000';
const app = require('./controller/apps_controller');
const server = http.createServer(app);

app.set('port', port);
server.listen(port);

