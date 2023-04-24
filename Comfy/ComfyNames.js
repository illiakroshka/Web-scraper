'use strict';

const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('.\Comfy.html', 'utf8');

const dom = new JSDOM(html);

const nameList = dom.window.document.querySelectorAll('.products-list-item__name');

for (let i = 0; i < nameList.length; i++) {
  const value = nameList[i].firstChild.textContent.trim();
  console.log(value);
}