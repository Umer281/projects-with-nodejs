const express=require('express');

const app=express();
//console.log(__dirname)
// app.get('/', function (req, res) {
//     console.log(req.protocol,req.hostname,req.url);
//         res.send('hello there');
//     })

//we can also send complete html file by res.sendfile
//   
 let pages=0;
app.get('/',function(req,res){ 
    pages++;
    console.log(pages);
    res.sendFile(__dirname + '/files/helloworld.html');
})




app.get('/view',function(req,res){ 
    console.log("no of views="+pages);
})

app.listen(3333);