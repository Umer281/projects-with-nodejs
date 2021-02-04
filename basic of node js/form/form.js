const express=require('express');
const app=express()



app.get('/form',function(req,res){ 
    //res.sendFile( __dirname + '/form_post.html') ## shows post request

    res.sendFile( __dirname + '/form.html')
})

app.get('/greet',function(req,res){ 
  
    let person='guest'
    if(req.query.person)
         res.send('good evening     ' +req.query.person)
    else 
       res.send('good evening   '  + person )
})






app.listen(5000)