var http = require("http");

var manejador = function(solicitud, respuesta){
    console.log("Recibiendo petición");
    respuesta.end("hola mundo como siempre");
};
var servidor = http.createServer(manejador);
servidor.listen(8030);

/*
    fs = require("fs");
var html = fs.readFileSync("./index.html");

http.createServer(function(req,res){
    res.write(html);
    res.end();
}).listen(8080);


