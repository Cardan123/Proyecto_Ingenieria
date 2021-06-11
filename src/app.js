const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const session = require('express-session');
const myConnection = require('express-myconnection');

const app = express();

//importando rutas
const customersRoutes = require('./routes/customer');

//settings
app.set('port',process.env.PORT||3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'bte78rmcmxhi4azyszfv-mysql.services.clever-cloud.com',
    user: 'ue0nzymcejbyobxf',
    password: 'P6vvSRSItsTYCZAErKE7',
    port: 3306,
    database: 'bte78rmcmxhi4azyszfv'
}, 'single'));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/',customersRoutes);


app.listen(app.get('port'), () => {
    console.log("Server on port 3000");
});