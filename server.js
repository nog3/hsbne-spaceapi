
http = require("http"),  
url = require("url"),  

http.createServer(function(request,response){  
    var path = url.parse(request.url).pathname;  
    if (path === "/json") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("JSON goes here yay!\n");
        response.end();
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found\n");
        response.end();
    }
}).listen(8080);  
console.log("Server Running on 8080"); 