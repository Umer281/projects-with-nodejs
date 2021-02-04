const express=require('express');
const app=express();

app.get('/',function(req,res){ 
    
    res.send("hello world");


})

app.get('/greet',function(req,res){ 
   // console.log(req.headers);    //headers are basically key value pairs in url,there exists some deafult headers
    console.log(req.query);  //request object is a strong object to get information about request that has come to your server
    res.send('good morning');
})
app.get('/wish',function(req,res){ 
    let person='guest';
    if(req.query.person)
         res.send('happy birthday   '+req.query.person)


    
})
app.listen(4300,() =>{ 
    console.log('server started at https://loclhost:4300');
})