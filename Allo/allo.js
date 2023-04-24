'use strict';

const fs = require('fs');

const URL = 'https://allo.ua/ru/products/notebooks/'

const sendRequest = (url) => {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.text()
    }
    else {
      return response.text().then(text => {
        throw new Error(text)
      })
    }
  })
}

sendRequest(URL)
  .then(data => {
    console.log(typeof data);
    fs.writeFileSync('.\Allo.html', data)
  })
  .catch(error => console.log(error))