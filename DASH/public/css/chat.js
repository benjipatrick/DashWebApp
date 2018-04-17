var socket = io.connect()
var conversation_id = 'email@email.com'

socket.emit('subscribe', conversation_id)

socket.on('conversation private post', function(data) {
    addChat(data)
})


$(() => {
    $("#send").click(() => {
        chatObj = {
            room: conversation_id,
            message: $("#txtMessage").val(),
            email: conversation_id,
            username: 'admin',
            sender: 1  
        }
        socket.emit('send message', chatObj)

        addChat(chatObj)
    })
})

$(document).ready(() => {
    getChats()
    $('#chattingWith').append('You are chatting with user: ' + conversation_id)
})

function getChats() {
    $.get("http://localhost:8090/messages/get_messages?e=" + conversation_id, (chats) => {
        console.log(chats)
        chats.forEach(addChat)
    })
}
function addChat(chatObj){
    if(chatObj.sender == 1) var sender = chatObj.username
    else var sender = chatObj.email
    $("#messages").append(`<h5>${sender} </h5><p>${chatObj.message}</p>`)
    $('#txtMessage').val('')
    window.scrollTo(0, document.body.scrollHeight)
}


function getCookie(name) {
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    if(match) return match[1]
    else return null
}

