// server.js index.js MVC Controller Route API, connects Client View UI index.html to Express Server, via Mongoose connect Model.js to MongoDB Atlas

var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// import express from 'express'

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html')
}) 

io.on('connection', function(socket) {
    console.log('a user is connected')

    socket.on('disconnect', function() {
        console.log('a user is disconnected')
    })

    socket.on('chat message', function(msg) {
        console.log('Message reçu : ' + msg)
        io.emit('chat message', msg)
    })

})

http.listen(3000, function() {
    console.log('Server running on port 3000')
})
