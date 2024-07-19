var express = require('express');
require('./connection');
var app = express();
var model = require('./model/emp');
// middleware
app.use(express.json());
// to add data to db
app.post("/add",async(req,res)=>{
    try {
        await model(req.body).save();
        res.send("data added!");
    } catch (error) {
        console.log(error);
    }
})
// to view data
app.get('/view',async(req,res)=>{
    try {
        var emp = await model.find();
        res.send(emp);
    } catch (error) {
        console.log(error);
    }
})
// to delete data
app.delete('/remove/:id',async(req,res)=>{
    var id = req.params.id;
    console.log(id);
    try {
        await model.findByIdAndDelete(id);
        res.send("Deleted successfully!");
    } catch (error) {
        
    }
})
// to update data by a specific value
app.patch('/update/:filter/:newval',async(req,res)=>{
    var filter = {e_name:req.params.filter};
    var updt = { e_age : req.params.newval}
    console.log(updt);
    try {
        await model.findOneAndUpdate(filter,updt);
        console.log("Updated Succesfully");
    } catch (error) {
        console.log(error);
    }
})
// updateing with body
app.put('/update/:filter',async(req,res)=>{
    var filter = req.params.filter;
    console.log(filter);
    try {
        await model.findByIdAndUpdate(filter,req.body);
        console.log("Updated Succesfully");
    } catch (error) {
        console.log(error);
    }
})

app.listen(3004,()=>{
    console.log("port is up and running!");
})