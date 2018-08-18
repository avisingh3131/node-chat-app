
const path=require('path');
const express=require('express');

const publicPath=path.join(__dirname+'/../public');
const Port=process.env.Port||3000;
var app=express();

app.use(express.static(publicPath));

app.listen(Port,()=>{
    console.log('server is up on port 3000');
});



