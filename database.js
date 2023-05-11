'use strict';

const fs = require('fs');

const resetDatabase = () => {
  const db = {
    Comfy: [],
    Allo: [],
  };
  const content = JSON.stringify(db);
  fs.writeFileSync('./database.json', content);
}

const getData = () => {
  if (!fs.existsSync('./database.json')) resetDatabase();
  const content = fs.readFileSync('./database.json', 'utf-8');
  const data = JSON.parse(content);
  return data; 
}

const writeComfyValue = (data) => {
  const db = getData();
  db.Comfy.push(data)
  const content = JSON.stringify(db);
  fs.writeFileSync('./database.json',content)
}

const writeAlloValue = (data) => {
  const db = getData();
  db.Allo.push(data)
  const content = JSON.stringify(db);
  fs.writeFileSync('./database.json',content)
}

module.exports = { writeComfyValue, writeAlloValue, getData, resetDatabase };