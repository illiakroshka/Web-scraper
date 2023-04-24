'use strict';

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('.\Comfy.html', 'utf8');

const dom = new JSDOM(html);

const priseList = dom.window.document.querySelectorAll('.products-list-item__actions-price-current')

for (let i = 0; i < priseList.length; i++) {
  const value = priseList[i].firstChild.textContent.trim();
  console.log(value);
}