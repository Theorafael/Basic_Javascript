// server
var http = requre('http');
http.createServer(function(req,res){
    res.writeHead(200, ('Content-type'  :   'text/html'});
    res.end('Hello World');
)}.listen(8080);