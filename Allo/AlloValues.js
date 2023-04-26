'use strict';

const fs = require('fs');
const database = require('../database')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


const html = fs.readFileSync('.\Allo.html', 'utf8');

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