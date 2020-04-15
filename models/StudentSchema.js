// student schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define StudentSchema
const StudentSchema = new Schema(
    {
        studentName : String,
        studentEmail : String
    }
)

module.exports = mongoose.model('student',StudentSchema);