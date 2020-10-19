var express = require('express'); 
var app = express();
var user = require('./controllers/usercontroller')
var sequelize = require('./db');

sequelize.sync();

app.use(express.json());

app.use('/user/register', user);

app.listen(3000, function(){
    console.log('app is listening on 3000!')
});