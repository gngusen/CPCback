const express = require('express');
const router = express.Router();
const connection = require('../index');



router.post('/addproject', (req, res) => {
    let project = {title:req.body.title, department:req.body.department}; 
    console.log(project); 
    let sql = 'INSERT INTO projects SET ?';   //name should be exactly as table name
    let query = connection.query(sql, project, (err, result) => {
        if(err){
            console.log(err.message);
            return  res.status(409).json({'message': err.message});
        }
        else if(result){Console.log(result);
           return  res.status(200).json({'message': 'Project table created...'});}
    });
});

module.exports=router;