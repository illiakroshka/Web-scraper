'use strict';

const https = require('https');
const fs = require('fs')

https.get('https://allo.ua/ru/products/notebooks/', (resp)=>{

  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.writeFileSync('.\Allo.html',data)
  });
  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});