var http = require('http');
var fs = require('fs');
const path = require("path");
http.createServer((request, response)=> {

           let filePath = request.url;
    if (filePath == '/') {
        filePath = __dirname+'/index.html';
    }
    fileExtension= path.extname(filePath);

        fs.readFile(filePath,{encoding:"UTF-8"}, (error,content)=>{
            fileType = path.extname(filePath);
            if(!error) {
                switch (fileType) {
                    case ".css":
                        response.writeHead(200, {"Content-Type": "text/css"});
                        response.write(content);
                    break;
                    case ".js":
                        response.writeHead(200, {"Content-Type": "text/javascript"});
                        response.write(content);
                    break;
                    default:
                        response.writeHead(200, {"Content-Type": "text/html"});
                        response.write(content);
                }
                response.end();
            } else {
                response.writeHead(404, {"Content-Type": "text/html"});
                response.write("error file");
                response.end(error);
            }
        })
    }).listen(9000);
console.log('Server is running');

