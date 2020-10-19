var express = require('express')
var router = express.Router()   //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

/*
! Section 1
*/

router.post('/user/register', function(req,res) {
    var username = req.body.user.username;
    var pass = req.body.user.password;
    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)
    }).then(
        function createSuccess(user) {
              //1          //2        //3          //4            //5 
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: 'created',
                sessionToken: token //6
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
});

module.exports = router;

/*
! Section 2
*/

        //7
router.post('/signin', function(req,res) {
          //1       //2        //3                                 //4
    User.findOne( {where: { username: req.body.user.username } } ).then(

         //5
        function(user) {
            //8
            if (user) {
                         //9            //10                 //11                 //12
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                //    console.log("The value matches:", matches);  //13
                //15
                if (matches) {
                 //16
                 var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                 res.json({
                     user: user,
                     message: "successfully authenticated",
                     sessionToken: token
                 });
                }else {
                    res.status(502).send({ error: "you failed, yo"});
                }
                })
            } else {  //14
                res.status(500).send({ error: "failed to authenticate" });  
            }
        },
        function(err) {
            res.status(501).send({ error: "you failed, yo"});  //6
        }
    );
});
