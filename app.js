'use strict';
const http = require('http');
const date = (new Date()).toJSON();
const SUCCESS = {
    version: '1.0',
    name: 'Be MEAN',
    returned_at: date
};
const ERROR = {
    message: "Error"
};

function handle(req, res) {
    if (req.url === '/api/v1') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.write(JSON.stringify(SUCCESS));
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.write(JSON.stringify(ERROR));
    }

    res.end();
}

var server = http.createServer(handle);

server.listen(3000, () => console.log('Server is listening at port 3000'));