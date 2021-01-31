const express=require('express')
const app=express()

//app.use('/xyz',express.static(__dirname + '/public'))  by this we can send documents which are in public folder e.g in url in place of public we write 
// - name of file which is present in public folder e.g a.html or b.html we have used in this
// *******************//////******** */

//// topic=Midleware--- this is how middleware works/////
// function m2(req,res,next){ 
//     console.log("running pre request 2")
//     next()
//     console.log('running middleware 2')
   
// }
// function m3(req,res,next){ 
//     console.log("running pre request 3")
//     next()
//     console.log('running middleware 3 post')
// }

// app.get('/',m2,m3,function(req,res){ 
//     console.log('running pre of main ')
//     res.send('hello world')
//     console.log('running post of main')
// })
  

// assignment //
function decrypt(req,res,next){ 
    // let ans=''
    // for(let i in req.query){ 
    //     if(req.query[i]==req.query[i].toLowerCase()){ 
    //         ans +=req.query[i].toUpperCase();
    //     }else if(req.query[i]==req.query[i].toUpperCase()){ 
    //          ans +=req.query[i].toLowerCase();
    //     }else{ 
    //         continue;
    //     }
       
    // }
   // req.query=ans;
    let ans =req.query;
    ans[0]=ans.replace(ans[0],ans[0].toUppercase())
    req.query[0]=ans[0];
    console.log(req.query[0]);
    next();

}
// function decodebase64(req,res,next){ 
  
//   for(let q in req.query){ 
//       let data=req.query[q]
//       data=new Buffer(data,'base64').toString('ascii')
//       req.query[q]=data
//   }
//   console.log(req.query);
//   next()

// }
app.get('/eval',decrypt,function(req,res){ 
    res.send("eval=====")
//     let x=eval(req.query)
//    res.send(x);

})


app.listen(5500)