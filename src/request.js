'use strict';

const https = require('https');
const fs = require('fs');

const COMFY_URL = 'https://comfy.ua/ua/notebook/';
const ALLO_URL = 'https://allo.ua/ru/products/notebooks/';

const comfyRequest = (URL = COMFY_URL) => {
  https.get(URL, (resp) => {

    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      fs.writeFileSync('./src/data/comfy.html', data);
    });

  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
};

const alloReuest = (URL = ALLO_URL) => {
  https.get(URL, (resp) => {

    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      fs.writeFileSync('./src/data/allo.html', data);
    });

  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
};

module.exports = { comfyRequest, alloReuest };
