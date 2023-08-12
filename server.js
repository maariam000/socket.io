const express = require('express')
// Import route files
const requests = require('./routes/request')


const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
// attach server to http module
// http.Server(app);
// attach http server to socket.io
// io(http)

// mount routes
app.use('/', requests)

// Create new connection
io.on('connection', socket => {
  console.log('A user connected')
  socket.on('disconnect', () => {
    console.log('A user has been disconnected')
  })

  socket.on('message', msg => {
    console.log(`Client message: ${msg}`)
  })

  // Emit event
  socket.emit('server', "Hey from the outer space")

})

const PORT = process.env.PORT || 8001;

http.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});