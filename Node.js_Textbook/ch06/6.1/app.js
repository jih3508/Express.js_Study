const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exp = require('constants');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser('zerochopassword'));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'zerochopassword',
    cookie: {
        httpOnly: true,
    }
}));
app.use('/', (req, res, next) => {
    if (req.session.id){
        express.static(__dirname, 'public')(req, res, next)
    }else {
        next();
    }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    req.session
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express');
});

app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}`);
});

app.get('/about', (req, res) => {
    res.send('hello express');
});

app.use((req, res, next) => {
    res.status(200).send('404지롱');
});

app.use((err, req, res, next) =>{
    console.error(err);
    res.status(200).send('에러났지롱. 근데 안알려주지롱');
});

app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행');
});