const express = require('express');
const morgan = require('morgan');
const path = require('path');
const sass = require('node-sass');
const exphbs = require('express-handlebars');
const app = express()
const port = 3000;
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
const SortMiddleware = require('./app/middlewares/sortMiddleware')

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('hbs', exphbs({ 
    extname: '.hbs',
    helpers: require('./app/helpers/handlebars')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.use(methodOverride('_method'))
// custom middleware
app.use(SortMiddleware)

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
