const express=require('express');

const app=express();

const db=require('./db');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","hbs");


app.get('/',function(req,res){ 

   db.getAllPersons()
       .then(function(persons){ 
        res.render('persons', {persons})    //the first argument 'persons' is name of hbs file
       })
       .catch(function(err){ 
           res.send(err);
       })


    
    }) 
app.get('/add',function(req,res){ 
    res.render('persons_add');
})



app.post('new/',function(req,res))




app.listen(9999);