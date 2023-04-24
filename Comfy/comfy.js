'use strict';

const https = require('https');
const fs = require('fs')

https.get('https://comfy.ua/ua/notebook/', (resp)=>{

  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
    fs.writeFileSync('.\Comfy.html',data)
  });
  
}).on("error", (err) => {
    console.log("Error: " + err.message);
});