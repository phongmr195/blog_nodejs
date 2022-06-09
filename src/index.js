const path = require('path');
const express = require('express');
const moran = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 5000;

app.use(moran('combined'));
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/resources/views'));
console.log(path.join(__dirname, '/resources/views'));


app.get('/', (req, res) => res.send('Xin chao cac ban!'));
app.listen(port, () => console.log(`Test example app listening at http://localhost:${port}`));