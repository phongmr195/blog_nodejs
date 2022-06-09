const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 5000;

// Load static foler
app.use(express.static(path.join(__dirname, 'public')));
// Use morgan
app.use(morgan('combined'));
// Use tempalte engine
app.engine('hbs', handlebars.engine({
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resources/views'));
console.log(path.join(__dirname, '/resources/views'));


app.get('/', (req, res) => {
    return res.render('home');
});
app.listen(port, () => console.log(`Test example app listening at http://localhost:${port}`));