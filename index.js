var express = require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
})
app.get('/clock',function(req,res){
    res.sendFile(__+dirname+'/frontend/html/clock.html');
})

var port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log('site run on http://localhost:'+port);
});
