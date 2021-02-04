const mysql=require('mysql2');
const connection=mysql.createConnection({ 
  host:'localhost',
  database:'mytestdb',
  user:'myuser',
  

})
connection.query(
    `SELECT * FROM persons`,function(err,results,fields){ 
        if(err){ 
            console.log(err);
        }else{ 
            console.log(results);
            console.log(fields);
        }
        connection.close();
        
    }
)

// results are actually rows in database as can be seen in the output like name age city
// fields are actually coloumns which tell us tge detail if colomns like which type of data it is,length of data,size etc c

