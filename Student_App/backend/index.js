var express = require('express');
require('./connection')
var app = express();
var cors = require('cors')
var model  = require('./model/student');

app.use(cors())
app.use(express.json());

app.post('/add', async(req,res)=>{
    try {
        await model(req.body).save();
        res.send('Data Added!');
    } catch (error) {
        console.log(error);
    }
})

app.get('/view', async(req,res)=>{
    try {
        var std = await model.find();
        res.send(std);
    } catch (error) {
        console.log(error);
    }
})

app.delete('/remove/:id', async(req,res)=>{
    try {
        console.log(req.params.id)
        var id = req.params.id
        var std = await model.findByIdAndDelete(id);
        res.send('Data Removed!');
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000, ()=>{
    console.log("port is up and running");
})