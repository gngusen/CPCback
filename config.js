const cloud_db = require('mysql');

const connection = {
    cloudsql: cloud_db.createPool({  //instance of mysql created
    host:'localhost',
    user:'root',
    password:'',
    database:'cloud'    //connect to the created db dont keep if not existing
    })
};

// connection.connect((err) => {  
//          if(!err){
//          console.log("Database is connected");
//         } else {
//             console.log('Error while connecting with database');
//         } 
//     });
    

module.exports = connection;