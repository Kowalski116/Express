const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sass = require('node-sass');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('hbs', exphbs({ extname: '.hbs' }));
        app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
