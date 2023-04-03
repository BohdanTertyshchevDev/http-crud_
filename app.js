const express = require('express');
const ThingController = require('./controllers/Thing.controller');

const app = express();
const bodyParser = express.json();

app.post('/thing', bodyParser, ThingController.createThing);
app.get('/thing/:id', ThingController.getOne); // 1 thing
app.get('/things', ThingController.getAllThings); // all things
app.delete('/thing/:id'); // delete one
app.put('/thing/:id'); // update one

module.exports = app;