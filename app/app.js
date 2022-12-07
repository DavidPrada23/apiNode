const  express =  require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');

const App = express();

const Product = require('./routes/product');
const User = require('./routes/user');
const Auth = require('./routes/auth');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
App.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
App.use(flash());

App.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
});

App.use('/product', Product);
App.use('/user', User);


module.exports = App;