var express = require('express')
var router = express.Router()

var userAccountModel = require('../models/user_account')
var staffAccountModel = require('../models/staff_account')

// post method to send account details for a potential user account
/*
    email
    password
*/
router.post('/user_create', function(req, res) {
    console.log("/account/user_create")
    // Here will have to be code to choose a staff member to assign to a user
    userAccountModel.create(req.body.email, req.body.password, 'staff01', (err) => {
        if(err) {
            res.status(400)
            res.send({error:'error creating user'})
        } else {
            res.status(200)
            res.send()
        }
    })
})

// post method to delete a specific user account
/*
    email
*/
router.post('/user_delete', function(req, res) {
    console.log("/account/user_delete")
    userAccountModel.delete(req.body.email)
})

// post method to send account details for a potential staff account
/*
    username
    password
    canEditNews
*/
router.post('/staff_create', function(req, res) {
    console.log("/account/staff_create")
    staffAccountModel.create(req.body.username, req.body.password, req.body.canEditNews, (err) => {
        if(err) {
            res.status(400)
            res.send({error:'error creating staff'})
        } else {
            res.status(200)
            res.send()
        }
    })
})

// post method to delete a specific staff account
/*
    username
*/
router.post('/staff_delete', function(req, res) {
    console.log("/account/staff_delete")
    staffAccountModel.delete(req.body.username)
})

// post method to update the privileges of a specific staff account
// e.g. assigning a new user to them
// or   allowing them to add/alter news stories 
/*
    username
    email
    canEditNews
*/
router.post('/staff_update_privileges', function(req, res) {
    console.log("/account/staff_update_privileges")
    if(req.body.email) userAccountModel.changeStaff(req.body.email, req.body.username)
    if(req.body.canEditNews) staffAccountModel.updatePriviledge(req.body.username, req.body.canEditNews)
})


router.get('/get_all_staff', function(req, res) {
    staffAccountModel.getAll((err, staff) => {
        if(err) {
            res.status(400)
            res.send({error:'No staff accounts found'})
        } else {
            res.status(200)
            res.send({'staff': staff})
        }
    })
})

router.get('/get_all_users', function(req, res) {
    userAccountModel.getAll((err, users) => {
        if(err) {
            res.status(400)
            res.send({error:'No user accounts found'})
            res.end()
        } else {
            res.status(200)
            res.send({'users': users})
            res.end()
        }
    })
})

module.exports = router