const express=require("express");
const cors=require('cors');
const categories=require("./data/categories.json")


const app=express();
app.use(cors());

app.get('/categories',(req,res)=>{
    console.log(categories);
    res.send(categories);
})

app.listen(8080,()=>{
    console.log("listening at port 8080");
})