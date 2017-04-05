const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;



var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('json', JSON.stringify);


app.get('/test', (req, res) => {
    res.render('index.hbs',{name: 'alan', age:'21'});
});

app.listen(port, () => {
  console.log('Escuchando en puerto', port);
});