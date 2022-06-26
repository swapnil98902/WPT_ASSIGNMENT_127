let express=require("express");
let app=express();
//This line creates an Express application by calling the top-level express() function.
// Our app variable (express application) has methods for handling requests and configuring 
// how the application behaves. We can create multiple apps this way,
// each with their own requests and responses.

app.get('/additem',(req,resp)=>{
    resp.send("add item needs to be done");

});
app.get('/updateitem',(res,resp)=>{
    resp.send("update items need to be done");
});

app.listen(1484,()=>{
    console.log("Express is running");
});
app.use(express.static("cp"));
