'use strict';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('.\Allo.html', 'utf8');

const dom = new JSDOM(html);

const nameList = dom.window.document.querySelectorAll('.product-card__title')

for (let i = 0; i < nameList.length; i++) {
  const value = nameList[i].firstChild.textContent.trim();
  console.log(value);
}

const priceList = dom.window.document.querySelectorAll('.v-pb__cur')

console.log(priceList.length);

for (let i = 0; i < priceList.length; i++) {
  const value = priceList[i].firstChild.textContent.trim();
  console.log(value);
}