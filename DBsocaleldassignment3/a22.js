const express =require('express');
const app=express();

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'kahhi',
    port:3306
});

connection.query("update item set itemname=? where itemno=? ",["swapnil",4],(error,res)=>{
    if(error){
        console.log("Error...............");
    }
    else{
        console.log(res);
    }
});