const route=require('express').Router()

const db=require('../db')



route.get('/',function(req,res){ 
    db.getAllPersons().then(function(persons){ 
       res.render('persons',{persons})
   })
   .catch(function(err){ 
    
           res.send(err);

   })

})
route.get('/add',function(req,res){  
    res.render('persons_add');
})
route.post('/add',function(req,res){ 

   db.addNewPerson(req.body.name,req.body.age,req.body.city)
   .then(function(){ 
     res.redirect('/pages/')
   })
   .catch(function(err){ 
       res.send(err);
   })


})


exports=module.exports = { 
    route
}