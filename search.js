'use strict';

const database = require('./database');

const content = database.getData();

const comfySearch = (name, data = content) => {
  for (const array of data.Comfy) {
    let laptop = array.find(product => product.name.includes(name));
    if (laptop) return laptop;
  }
}

const alloSearch = (name, data = content) => {
  for (const array of data.Allo) {
    let laptop = array.find(product => product.name.includes(name));
    if (laptop) return laptop;
  }
}

module.exports = { comfySearch, alloSearch };