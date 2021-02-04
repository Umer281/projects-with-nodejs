const mysql=require('mysql2');
const connection=mysql.createConnection({ 
  host:'localhost',
  database:'mytestdb',
  user:'myuser',
  

})
 const insert={   //process.argv gives us arguments that we have passed in terminal and by default process.argv[0] is node and process.argv[1] is file so name will be process.argv[2] and id is AUTO_INCREAMENT so we dont need to pass it mysq        
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}
connection.query(
    `INSERT INTO persons(name,age,city) VALUES (
     '${insert.name}',
     '${insert.age}',
     '${insert.city}'
    )`,function(err,results){ 
        if(err){ 
            console.log(err);
        }else{ 
            console.log(results);
            console.log("inserted successfully");
        }
        connection.close();
        
    }
)







////
// const mysql=require('mysql2')
// const connection =mysql.createConnection({ 
//     host:'localhost',
//     user:'myuser',
//     database:'mytestdb',
// })

// const insert={ 
//     customer_name:process.argv[2],
//     item:process.argv[3],
//     address:process.argv[4],
//     age:parseInt(process.argv[5])
    
// }

// connection.query(`INSERT INTO shopping_table (customer_name,item,address,age) VALUES (
//     '${insert.customer_name}',
//     '${insert.item}',
//     '${insert.address}',
//     '${insert.age}'
// )`,function(err,results){ 
//     if(err){ 
//         console.log(err);
//     }else{ 
//         console.log(results);
//         console.log("inserted successfully");
//     }
//     connection.close();
// })