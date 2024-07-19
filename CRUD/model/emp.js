var mongoose = require('mongoose');
// schema
var emp_schema = mongoose.Schema({
    e_name : String,
    e_age : Number,
    e_dept : String,
    e_salary: Number
});

var empModel = mongoose.model("employee",emp_schema);
module.exports = empModel;