// teacher schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define teacher schema
const TeacherSchema = new Schema(
    {
        teacherName: String,
        teacherEmail: String,
        teacherCourseFocus: String
    }
)

module.exports = mongoose.model('teacher',TeacherSchema);