var express = require('express')
var app = express();
var bodyParser = require("body-parser")

var index = require('./controllers/index')


var http = require("http").Server(app)
var io = require("socket.io")(http)


BASE = ''

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(__dirname))

app.use(BASE + '/', index);

var messageModel = require('./models/messages')

io.sockets.on('connection', function (socket) {
    socket.on('subscribe', function(room) {
        console.log('joining room', room);
        socket.join(room);
    })

    // inputs email, password, message, username function saves the messages in the database with 
    app.post('/messages/send_message', function(req, res) { 
        console.log(req.body)
        try {
            messageModel.save(req.body.email, req.body.username, req.body.message, req.body.sender)
            res.sendStatus(200)
            //Emit the event
            socket.broadcast.to(req.body.room).emit('conversation private post', req.body)
        } catch (error) {
            res.sendStatus(500)
            console.error(error)
        }
        console.log("/messages/send_message")
    })

    socket.on('send message', function(data) {
        console.log('sending room post', data.room);
        try {
            //Emit the event
            socket.broadcast.to(data.room).emit('conversation private post', data)
            messageModel.save(data.email, data.username, data.message, data.sender)
        } catch (error) {
            console.error(error)
        }
    })
})






// testing routes....
app.get('/chat.html', function(req, res) {
    res.sendFile(__dirname + '/views/chat.html')
})

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/staffnews.html', function(req, res) {
    res.sendFile(__dirname + '/views/staffnews.html')
})

app.get('/feedback.html', function(req, res) {
    res.sendFile(__dirname + '/admin/feedback.html')
})
app.get('/staff_manage.html', function(req, res) {
    res.sendFile(__dirname + '/admin/staff_manage.html')
})
app.get('/user_manage.html', function(req, res) {
    res.sendFile(__dirname + '/admin/user_manage.html')
})

var port = process.env.PORT || 8090;

var server = http.listen(port, () => {
    console.log("App running on ", server.address().port)
})