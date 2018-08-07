var http = require("http");

var PORT = 7000;

function handleRequests(request, response){
    response.end("You are beautiful" + request.url);
}
var server = http.createServer(handleRequests);

server.listen(PORT, function(){
    console.log("Server listening on : http://localhost:" + PORT);
});
var PORT1 = 7500;

function handleRequestsone(request,response){
    response.end("You are ugly" + request.url);
}
var server1 = http.createServer(handleRequestsone);
server1.listen(PORT1, function(){
    console.log("server listening on : http://localhost:" + PORT1);
});