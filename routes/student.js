const express = require('express');
const router = express.Router();
const conn = require('../config');

router.post('/addstudent', (req, res) => {
    let student = {first_name:req.body.first_name, last_name:req.body.last_name, 
                    regno:req.body.regno, password:req.body.password, email:req.body.email,
                     year_of_study:req.body.year_of_study, project_id:req.body.project_id}; 
    console.log(student); 
    let sql = 'INSERT INTO student SET ?';   //name should be exactly as table name

    conn.cloudsql.getConnection(function(err, connection){
        connection.query(sql, student, (err, result) => {
        if(err){
            console.log(err.message);
            return  res.status(409).json({'message': err.message});
        }
        else if(result){
            console.log(result);
           return  res.status(200).json({'message': 'Student created...'});}

    });
});});

module.exports=router;