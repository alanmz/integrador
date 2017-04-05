const express = require('express');
const hbs = require('hbs');



var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('json', JSON.stringify);


app.get('/test', (req, res) => {
    res.render('index.hbs',{name: 'alan', age:'21'});
});

app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});