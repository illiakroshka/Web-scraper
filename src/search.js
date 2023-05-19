'use strict';

const database = require('./database');

const comfySearch = (name) => {
  const data = database.getData();
  for (const array of data.Comfy) {
    const laptop = array.find((product) => product.name.includes(name));
    if (laptop) return laptop;
  }
};

const alloSearch = (name) => {
  const data = database.getData();
  for (const array of data.Allo) {
    const laptop = array.find((product) => product.name.includes(name));
    if (laptop) return laptop;
  }
};

module.exports = { comfySearch, alloSearch };
