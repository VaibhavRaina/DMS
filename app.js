const express = require('express');
const ejsMate = require('ejs-mate');
const app = express();
const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory with specified extensions
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'htm', 'css', 'js'] }));

app.listen(8080, () => {
    console.log('Serving on port 8080');
});

app.get('/', async function(req, res, next) {
    res.render('puzzle/index');
});
