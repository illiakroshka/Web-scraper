'use strict';

const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log('Server request');

  res.setHeader('Content-Type', 'text/html');

  if (req.url = '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        console.log(err);
        res.end;
      }
      else {
        res.write(data);
        res.end();
      }
    })
  }
})

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  else {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
})