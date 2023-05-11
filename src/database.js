'use strict';

const fs = require('fs');

const resetDatabase = () => {
  const db = {
    Comfy: [],
    Allo: [],
  };
  const content = JSON.stringify(db);
  fs.writeFileSync('./src/data/database.json', content);
}

const getData = () => {
  if (!fs.existsSync('./src/data/database.json')) resetDatabase();
  const content = fs.readFileSync('./src/data/database.json', 'utf-8');
  const data = JSON.parse(content);
  return data; 
}

const writeComfyValue = (data) => {
  const db = getData();
  db.Comfy.push(data)
  const content = JSON.stringify(db);
  fs.writeFileSync('./src/data/database.json',content)
}

const writeAlloValue = (data) => {
  const db = getData();
  db.Allo.push(data)
  const content = JSON.stringify(db);
  fs.writeFileSync('./src/data/database.json',content)
}

module.exports = { writeComfyValue, writeAlloValue, getData, resetDatabase };