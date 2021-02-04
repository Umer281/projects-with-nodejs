const express=require('express')

const app=express()
let list=['first task','second task']
// app.get('/add',function(req,res){ 

//     let listtodo=''
//     for(let i=0;i<list.length;i++){ 
//       listtodo +=`<li>` +list[i]+`</li>`

//     }
//     let html= `
//                <html> 
//                <body> 
//                     <input>
//                     <button>ADD</button>
//                     <ul>${listtodo}</ul>
//                </body>
//            </html>`


   // to add elements when we click add button
   app.get('/',function(req,res){ 
    let listtodo='';
     for(let i=0;i<list.length;i++){ 
        listtodo +=`<li>` +list[i] + `</li>`
     }
     
     let html=
     `<html>
         <body> 
             <form action="/add">
                 <input name="task">
                 <button type="submit">Add</button>
             </form>
             <ul> ${listtodo}  
             </ul>
         </body>
     </html>`
     res.send(html);
   })

       
 app.get('/add',function(req,res){ 

    console.log(req.query);
    list.push(req.query.task);
    res.redirect('/');

 })

app.listen(4444);