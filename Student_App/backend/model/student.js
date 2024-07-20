var mongoose = require('mongoose')

var std = mongoose.Schema({
    name : String,
    rollno : Number,
    class : String,
    department : String
});

var stdmodel = mongoose.model("Student",std);
module.exports = stdmodel;