const http = require('http');
const url=require('url');

http.createServer((req,res)=>{
    let rs=url.parse(req.url,true).query;
    let dia=rs.radius*2;
    res.write("Diameter of a circle= "+dia);
    res.end();
}).listen(1234);