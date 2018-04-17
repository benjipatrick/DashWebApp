var express = require('express')
var router = express.Router()

var newsModel = require('../models/news')

// get method that returns an array of news stories from a certain date
/*

*/
router.get('/', function(req, res) {
    console.log("/news")
    newsModel.get((err, news) => {
        res.send({'News':news})
    })
})

// post method that adds a new news story 
/*
    title urlencoded in body
    blurb
    username
*/
router.post('/add', function (req, res) {

    // here is where i sort out uploading the image
    if (!req.files)
        return res.status(400).send("No files were uploaded");

    console.log(req.files);
    var file = req.files.image;
    var img_name = file.name;


    if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){                       
              file.mv('./public/img/upload_images/'+file.name, function(err) {           
               if (err)
                 return res.status(500).send(err);

    console.log("/news/add")
    newsModel.add(req.body.username, req.body.title, req.body.blurb, img_name);
    });
          } else {
            message = "This format is not allowed, please upload file with '.png' =, '.gif', '.jpg'";
            // somehow display this message
          }
})

// post method that removes a specific news story
/*
    newsID urlencoded in body
*/
router.post('/remove', function(req, res) {
    console.log("/news/remove")

    newsModel.remove(req.body.newsID)
    
})

// post method that alters an existing news story 
/*                      Look into staff updates 
    newsID
    blurb 
    title
*/
router.post('/update', function(req, res) {
    console.log("/news/update")
    newsModel.update(req.body.newsID, req.body.title, req.body.blurb)
})

module.exports = router