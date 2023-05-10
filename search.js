'use strict';

const database = require('./database');

const comfySearch = (name) => {
  const data = database.getData();
  for (const array of data.Comfy) {
    let laptop = array.find(product => product.name.includes(name));
    if (laptop) return laptop;
  }
}

const alloSearch = (name) => {
  const data = database.getData();
  for (const array of data.Allo) {
    let laptop = array.find(product => product.name.includes(name));
    if (laptop) return laptop;
  }
}

module.exports = { comfySearch, alloSearch };