const fs = require('fs');
const path = require('path');

const currentFileName = path.basename(__filename);

const db = {};

fs.readdirSync(__dirname)
.filter(fName => /.js$/.test(fName) && fName !== currentFileName)
.forEach(fName => {
    const absPathToFile = path.resolve(__dirname, fName);
    const Model = require(absPathToFile);
    Model.client = client;
    db[Model.name] = Model;
})