
const path=require('path');
const http=require('http');
const express=require('express');
const socketIo=require('socket.io');

const publicPath=path.join(__dirname+'/../public');
const port=process.env.Port ||3000;
var app=express();
var server=http.createServer(app);
var io=socketIo(server);

app.use(express.static(publicPath));

<<<<<<< HEAD
io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.on('disconnect',()=>{
        console.log('User was disconnected');
    });
});


server.listen(port,()=>{
    console.log(`server is up on ${port}`);
=======
app.listen(port,()=>{
    console.log('server is up on port 3000');
>>>>>>> 1ead9043388effa0c7d3663ed2078c289060ce98
});



