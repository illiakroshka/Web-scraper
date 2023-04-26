'use strict';

const fs = require('fs');
const database = require('../database')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('.\Comfy.html', 'utf8');

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

database.writeComfyValue(products)