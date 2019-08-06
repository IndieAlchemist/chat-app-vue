const express = require('express')


const app = express();

const server = app.listen(3030, ()=>{
    console.log('server is running on port 3030');
});

const io = require('socket.io')(server);

io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.on('SEND_MESSAGE', (data)=>{
        io.emit('MESSAGE', data);
    })
})