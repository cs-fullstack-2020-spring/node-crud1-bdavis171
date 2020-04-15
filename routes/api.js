// api route

// reference express
const express = require('express');
const router = express.Router();

// reference schemas
const StudentCollection = require('../models/StudentSchema');
const TeacherCollection = require('../models/TeacherSchema');

// POST: create new student
router.post('/student',(req,res) => {
    StudentCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// POST: create new teacher
router.post('/teacher', (req,res) => {
    TeacherCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: read one student by email
router.get('/student/:email',(req,res) => {
    StudentCollection.findOne({studentEmail:req.params.email},(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: read one teacher by email
router.get('/teacher/:email', (req,res) => {
    TeacherCollection.findOne({teacherEmail:req.params.email},(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: read all students
router.get('/student', (req,res) => {
    StudentCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// GET: read all teachers
router.get('/teacher', (req,res) => {
    TeacherCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// PUT: update student by email
router.put('/student/:email',(req,res) => {
    StudentCollection.findOneAndUpdate({studentEmail:req.params.email},req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// PUT: update teacher by email
router.put('/teacher/:email',(req,res) => {
    TeacherCollection.findOneAndUpdate({teacherEmail:req.params.email},req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    })
})

// DELETE: delete student by email
router.delete('/student/:email',(req,res) => {
    StudentCollection.findOneAndDelete({studentEmail:req.params.email},(errors,results) => {
        errors ? res.send(errors):res.send(`Student with email ${req.params.email} has been deleted.`);
    })
})

// DELETE: delete teacher by email
router.delete('/teacher/:email',(req,res) => {
    TeacherCollection.findOneAndDelete({teacherEmail:req.params.email},(errors,results) => {
        errors ? res.send(errors):res.send(`Teacher with email ${req.params.email} has been deleted.`);
    })
})

module.exports = router;