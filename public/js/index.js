var socket= io();
        socket.on('connect',function(){
    console.log('connected to server');
        });

    socket.on('disconnect',function(){
    console.log('disconnected from server');
    });

    socket.on('newMessage',function(message){
        console.log('New Message',message);
        });

        socket.emit('createMessage',{
            from:'Ram',
            text:"Hey! HOW ARE YOU"
    
        });