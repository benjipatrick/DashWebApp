var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var userAccountModel = require('../models/user_account')
var staffAccountModel = require('../models/staff_account')

// may have to create a cookie authentication service type deal

// post method which checks if a user logon is legitimate
/*
    email
    password
*/
router.post('/user', function(req, res) {
    userAccountModel.checkLogon(req.body.email, req.body.password, (err, logon) => {
        if(err || !logon) {
            res.status(400)
            res.setHeader('Content-Type', 'application/json');
            res.send({"error":"incorrect email password combination"})
            res.end()
        } else {
            res.status(200)
            res.setHeader('Content-Type', 'application/json');
            res.send({"logon":"success"})
            res.end()
        }
    })
    console.log("/logon/user")
})

// post method which allows a user to reset their password
/*
    email
    old_password
    new_password
*/
router.post('/user/reset_password', function(req, res) {
    userAccountModel.changePassword(req.body.email, req.body.old_password, req.body.new_password)
    console.log("/logon/user/reset_password")
})

// post method which checks if a staff (includes admin) logon is legitimate
/*
    username
    password
*/
router.post('/staff', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    staffAccountModel.checkLogon(req.body.username, req.body.password, (err, logon) => {
        if (err || !logon) {
            res.status(400)
            res.send({"error":"incorrect email password combination"})
            res.end()
        } else {
            res.status(200)
			res.cookie('logon', req.body.username , { maxAge: 7200000})
            res.send({'logon':"logged on"})
            res.end()
        }
    })
    console.log("/logon/staff")
})

// post method which allows staff to reset their password
/*
    username
    old_password
    new_password
*/
router.post('/staff/reset_password', function(req, res) {
    staffAccountModel.changePassword(req.body.email, req.body.old_password, req.body.new_password)
    console.log("/logon/staff/reset_password")
})

router.post('/staff/log_off', function(req, res) {
	/*
		don't forget to edit the cookie options ie look into signing cookies
	*/
	res.clearCookie('logon', { maxAge: 7200000})
	res.send('logged off')
	
})

module.exports = router