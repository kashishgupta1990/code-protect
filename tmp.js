var _x50423 = [
    'http',
    'end',
    'It Works!! Path Hit: ',
    'url',
    'createServer',
    'listen',
    'log',
    'Server listening on: http://localhost:%s'
];
var http = require(_x50423[0]);
const PORT = 8080;
function handleRequest(request, response) {
    response[_x50423[1]](_x50423[2] + request[_x50423[3]]);
}
var server = http[_x50423[4]](handleRequest);
server[_x50423[5]](PORT, function () {
    console[_x50423[6]](_x50423[7], PORT);
});
