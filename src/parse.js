'use strict';

const fs = require('fs');
const database = require('./database');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const parseAllo = () => {
  const html = fs.readFileSync('./src/data/allo.html', 'utf8');

  const dom = new JSDOM(html);

  const nameList = dom.window.document.querySelectorAll('.product-card__title');
  const priceList = dom.window.document.querySelectorAll('.v-pb__cur');

  const products = [];
  for (let i = 0; i < nameList.length; i++) {
    const pruductName = nameList[i].firstChild.textContent.trim();
    const pruductPrice = priceList[i].firstChild.textContent.trim();
    const productObj = { name: pruductName, price: pruductPrice };
    products.push(productObj);
  }

  database.writeAlloValue(products);
};

const parseComfy = () => {
  const html = fs.readFileSync('./src/data/comfy.html', 'utf8');

  const dom = new JSDOM(html);

  const nameList = dom.window.document.querySelectorAll('.products-list-item__name');
  const priseList = dom.window.document.querySelectorAll('.products-list-item__actions-price-current');

  const products = [];
  for (let i = 0; i < nameList.length; i++) {
    const pruductName = nameList[i].firstChild.textContent.trim();
    const productPrice = priseList[i].firstChild.textContent.trim();
    const productObj = { name: pruductName, price: productPrice };
    products.push(productObj);
  }

  database.writeComfyValue(products);
};

module.exports = { parseAllo, parseComfy };
