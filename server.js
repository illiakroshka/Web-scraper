'use strict';

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const seach = require('./search');
const request = require('./request');
const parseAllo = require('./Allo/AlloValues');
const parseComfy = require('./Comfy/ComfyValues');
const database = require('./database');

const PORT = 3000;

const server = http.createServer((req,res)=>{
  console.log('Server request');

  res.setHeader('Content-Type', 'text/html; charset=utf-8');

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
  if (req.url === '/buttonGet' && req.method === 'POST') {
    request.alloReuest();
    request.comfyRequest();
    parseAllo.parseAllo();
    parseComfy.parseComfy();
    res.end();
  }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      const formData = querystring.parse(body);
      let laptopComfy = seach.comfySearch(formData.name);
      let laptopAllo = seach.alloSearch(formData.name);
      let html = '';
      if (laptopComfy) {
        html += '<div>The pruduct in comfy ' + laptopComfy.name + ' ' + laptopComfy.price + '₴</div>';
      } else {
        html += '<div>There is no such laptop in comfy</div>';
      }
      if (laptopAllo) {
        html += '<div>The product in allo ' + laptopAllo.name + ' ' + laptopAllo.price + '₴</div>';
      } else {
        html += '<div>There is no such laptop in allo</div>';
      }
      res.write(html);
      res.end();
    });
  }
})

server.listen(PORT,(error)=>{
  error ? console.log(error) : console.log(`Server listening at http://localhost:${PORT}`)
})

server.on('close', () => {
  fs.writeFileSync('./allo.html', '', (err) => {
  if (err) throw err;
  });
  fs.writeFileSync('./comfy.html', '', (err) => {
  if (err) throw err;
  })
  database.resetDatabase();
})

process.on('SIGINT', () => {
  console.log('Stopping server...');
  server.close(() => {
    console.log('Server stopped');
    process.exit();
  });
});