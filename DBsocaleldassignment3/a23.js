const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'kahihi',
    port:3306
});

connection.query("select * from item where itemno=? ",[1],(error,res)=>{
    if(error){
        console.log("Error...............");
    }
    else{
        console.log(res);
    }
});
