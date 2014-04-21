var http = require("http"),  
url = require("url"),  
levelup = require("levelup"),  
port = 80;
    
var spaceInfo = {
    api: "0.12",
    space: "HSBNE",
    logo: "http://hsbne.org/assets/img/headerlogo.png",
    icon: {
        open: "http://hsbne.org/assets/img/headerlogo.png",
        closed: "http://hsbne.org/assets/img/headerlogo.png"
    },
    url: "http://hsbne.org/",
    address: "217 Macarthur Avenue, Eagle Farm QLD 4009",
    contact: {
        email: "contact@hsbne.org",
        irc: "irc://freenode/hsbne",
        ml: "hackerspace_brisbane@googlegroups.com",
        twitter: "@HSBNE"
    },
    
    lat: -27.45493,
    lon: 153.050181,
    open: false,
    status: "closed",
    lastchange: 1386524299
};

var spaceJson = JSON.stringify(spaceInfo);

http.createServer(function(request,response){  
    var path = url.parse(request.url).pathname;  
    if (path === "/json") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(spaceJson);
        response.end();
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("go to /json you dummy\n");
        response.end();
    }
}).listen(port);  
console.log("Server Running on " + port); 
