const express=require('express');


const app=express();

//const db=require('./db');



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","hbs");

app.get('/p',function(req,res){ 
    res.render('persons_add')
})
app.post('/pra',function(req,res){ 
    let name='guest';
  if(req.body.name){ 
        name=req.body.name;
    }
    console.log(name);
    res.send(name);

    
})

app.listen(4111);