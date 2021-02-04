const mysql=require('mysql2');
const connection=mysql.createConnection({ 
  host:'localhost',
  database:'mytestdb',
  user:'myuser',
  

})
connection.query(
    `CREATE TABLE IF NOT EXISTS persons(
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(40) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(30) )`,function(err,results){ 
        if(err){ 
            console.log(err);
        }else{ 
            console.log("table created successfully");
        }
        connection.close();
        
    }
)




////
// const mysql=require('mysql2')

// const connection=mysql.createConnection({ 
//     host:'localhost',
//     user:'myuser',
//     database:'mytestdb',
// })

// connection.query(`CREATE TABLE IF NOT EXISTS shopping_table (id INTEGER AUTO_INCREMENT PRIMARY KEY,customer_name VARCHAR(50) NOT NULL,
// item VARCHAR(30),address VARCHAR(30),age INTEGER)`,
//       function(err,results){ 
  
//     if(err){ 
//         console.log(err);
//     }else{ 
//         console.log(results);
        
//     }
//     connection.close();


// })














