const { urlencoded } = require('body-parser')
const express=require('express')
const app=express()
app.use(express.urlencoded( {extended:true}))

app.get('/form_post',function(req,res){ 
    res.sendFile(__dirname + '/form_post.html')
})

app.post('/greet1',function(req,res){ 
    let person='guest'

    if(req.body.person){ 
        person=req.body.person
        res.send('good evening '+ person)
    }else{ 
        res.send('good evening ' +person)
    }
})

// this route is for url params which are city and welcome in this case
app.get('/:city/:welcome',function(req,res){ 
    res.send(req.params.welcome   +    "to" +    req.params.city);
})
app.listen(5100)