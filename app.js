var express = require('express');
var fs = require('fs');
// var request = require('request ');
var path= require('path');

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('./index.html','utf-8',function(err,data){
//     if(err){
//       throw err ;
//     }
//     res.write(data);
//     return res.end();
//     // res.end('Hello World!');
//   });
// })
 
var app = express();

// // app.get('/', function(req, res){
// //     res.send('welcome to express');
// // });

// // app.use(bodyParser.json());
// // app.get('/error', (req, res)=>res.send(error()))

// // app.use(function(err, req, res, text){
// //   console.error(error.stack)
// //   res.type('text/plain')
// //   res.status(500)
// //   res.send('internal server error 500')
// // })
 

app.get('/', function(req, res){
  //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
  res.writeHead(200,{'Content-Type':'text/html'})
  // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
  fs.readFile('./index.html','utf-8',function(err,data){
    if(err){
      throw err ;
    }
  res.end(data);
  });
})
 
// app.use('/', express.static(''));
app.use(express.static(__dirname ));

app.listen(8080);
