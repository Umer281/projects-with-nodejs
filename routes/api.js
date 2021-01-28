const route=require('express').Router()
//this route is on /api/ path
const db=require('../db')


route.get('/persons/',function(req,res){ 
    db.getAllPersons()
     .then(function(persons){ 
         res.send(persons)
     })
     .catch(function(err){ 
         res.send(err);
     })
})


route.post('/persons/',function(req,res){ 
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
      .then(function(){ 
          res.redirect('/persons/')
      })
      .catch(function(err){ 
          res.send(err);
      })
})






exports=module.exports={ 
    route
}