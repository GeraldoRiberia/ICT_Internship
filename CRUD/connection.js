var mongoose = require('mongoose')

mongoose.connect("mongodb+srv://adisankarlalan:adisankar@cluster0.g6ea5pi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",).then(()=>{
    console.log('connected to db')
}).catch((error)=>{
    console.log(error)
})