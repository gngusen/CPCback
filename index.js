const express = require('express');
const cloud_db = require('mysql');  //plugin connecting to mysql

const bodyparser = require('body-parser');
const projectRoutes = require('./routes/project');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/project', projectRoutes);
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('Server listening port 3000');
});

module.exports = app;