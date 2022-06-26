const express =require('express');
const app=express();
app.use(express.static("static"));

const mysql=require('mysql2');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'cdac',
    database:'kahihi',
    port:3306
});


app.get('/getareaname',(req,res)=>{
    let pincode=req.query.pincode;
    let output={status:false,areaname:""};
    connection.query('select areaname from q4 where pincode=?',[pincode],(error,result)=>{
        if(error){
        console.log(error);
        }
        else{
            console.log(result);
            if(result.length>0){
                output.status=true;
                output.areaname=result[0].areaname;
            }
            else{
                console.log("no rows return");
            }
        }
        res.send(output);
    });

    
});

app.listen(900,()=>{

});