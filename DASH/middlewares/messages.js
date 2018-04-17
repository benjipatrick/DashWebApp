var express = require('express')
var router = express.Router()

var messageModel = require('../models/messages')

// inputs email, password, staffIdentifier(optional)  outputs all messages associated with said account
/*
    email
*/
router.get('/get_messages', function(req, res) {
    messageModel.get(req.query.e, (err, messages) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(messages)
        res.end()
    }) 

    console.log("/messages/get_messages")
})


module.exports = router