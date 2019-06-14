const express = require('express');
const router = express.Router();
const conn = require('../config');


router.post('/addteacher', (req, res) => {
    let teacher = {first_name:req.body.first_name, last_name:req.body.last_name, password:req.body.password, email:req.body.email}; 
    console.log(teacher); 
    let sql = 'INSERT INTO teacher SET ?';   //name should be exactly as table name

    conn.cloudsql.getConnection(function(err, connection){
        connection.query(sql, teacher, (err, result) => {
            if(err){
                console.log(err.message);
                return  res.status(409).json({'message': err.message});
            }
            else if(result){
                console.log(result);
               return  res.status(200).json({'message': 'Teacher registered successfully'});}
    });

    });});
    module.exports=router;
