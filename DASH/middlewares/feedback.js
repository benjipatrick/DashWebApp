var express = require('express')
var router = express.Router()

var feedbackModel = require('../models/feedback')

// post method to send feedback from mobile app
/*
    email
    feedback
*/
router.post('/send_feedback', function(req, res) {
    console.log("/feedback/send_feedback")
    feedbackModel.save(req.body.email, req.body.feedback)
})

// get method to receive feedback that users have sent
router.get('/get_feedback', function(req, res) {
    console.log("/feedback/get_feedback")
    feedbackModel.get((err, feedback) => {
        if(err) {
            res.status(400)
            res.send({"error":"could not retrieve feedback"})
        } else {
            res.status(200)
            res.send({"feedback":feedback})
        }
    })
})

module.exports = router