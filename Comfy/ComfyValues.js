'use strict';

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('.\Comfy.html', 'utf8');

const dom = new JSDOM(html);

const nameList = dom.window.document.querySelectorAll('.products-list-item__name');
const priseList = dom.window.document.querySelectorAll('.products-list-item__actions-price-current')

for (let i = 0; i < nameList.length; i++) {
  const pruductName = nameList[i].firstChild.textContent.trim();
  const productPrice = priseList[i].firstChild.textContent.trim();
  console.log(pruductName, productPrice);
}