var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adisankarlalan:adisankar@cluster0.g6ea5pi.mongodb.net/student_app?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connected to db !');
}).catch((error)=>{
    console.log(error);
});
