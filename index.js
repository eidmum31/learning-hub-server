const express=require("express");
const cors=require('cors');
const categories=require("./data/categories.json");
const courses=require("./data/courses.json");
const port=8080;

const app=express();
app.use(cors());

app.get('/categories',(req,res)=>{
    console.log(categories);
    res.send(categories);
})

app.get('/category/:id',(req,res)=>{
    const id=req.params.id;
    if(id==0)
        res.send(courses);
    else
    {
        const categoryCourses=courses.filter(x=>x.category_id==id);
        res.send(categoryCourses);
    }
   
})

app.listen(port,()=>{
    console.log("listening at port 8080");
})