var express = require('express');
const { request } = require('express');
var app=express();
app.use(express.static(__dirname+'/frontend'))


app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
})
app.get('/tambola',function(req,res){
    res.sendFile(__dirname+'/frontend/html/tambola.html')
})

// var questions=[{ques:"what does HTML stands for?",id:1,title:"HTMl",options:["Hyper Text Markup Language","Home Tool Markup Language","Hyperlink and Text Markup Language"],correctans:"Hyper Text Markup Language"},
// {ques:"what is the correct html element for largest heading",id:2,title:"HTML",options:["<h6>","<h1>","Heading"],correctans:"<h1>"},{ques:"what is the html element for line break",id:3,title:"HTML",options:["break","<pre>","<br>"],correctans:"<br>"},
// {ques:"what is the correct html element for emphasized text",id:3,title:"HTML",options:["<i>","<italic>","<em>"],correctans:"<em>"}]
// app.get('/api/questions',function(req,res){
//     res.json(questions)
// })
// app.get('api/questions/:id',function(req,res){
//     res.json(req.params);
// })
// var users={id:1,name:"beingzero"};
// app.get('/api/users/:name',function(req,res){
//     res.json(req.params);
// })
// app.get('api/users/:userId',function(req,res){
//     console.log(JSON.stringify(req.params));
//     var user={};
//     for(var i=0;i<users.length;i++){
//         if(user[i].id==req.params.userId){
//             user=users[i];
//         }
//     }
//     res.json(user);
// })
var port=process.env.PORT || 5000;
app.listen(port,function(){
    console.log('site run on http://localhost:'+port);
});
