'use strict';

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const PORT = 3000;

const server = http.createServer((req,res)=>{
  console.log('Server request');

  res.setHeader('Content-Type','text/html');

  if (req.url === '/'){
    fs.readFile('./index.html', (err,data)=>{
      if (err){
        console.log(err);
        res.end();
      }
      else {
        res.write(data);
        res.end();
      }
    })
  }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      let formData = querystring.parse(body);

    });
  }
})

server.listen(PORT,(error)=>{
  error ? console.log(error) : console.log(`Server listening at http://localhost:${PORT}`)
})