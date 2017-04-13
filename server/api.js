'use strict'
const api = require('express').Router()
const db = require('../db')

var models = require('../db/models')
var Campus = models.campus
var Student = models.students

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

// GET
// - all campuses
// - a campus by id
// - all students
// - a student by id

api.get('/campuses', function(req, res, next){
  Campus.findAll()
  .then(function(found){
    res.send(found);
  })
})

api.get('/students', function(req, res, next){
  Stdents.findAll()
  .then(function(found){
    res.send(found)
  })
})

api.get('/campuses/:id', function(req, res, next){
  Campus.findById(req.params.id)
  .then(function(found){
    res.send(found)
  })
})

api.get('/students/:id', function(req, res, next){
  Students.findById(req.params.id)
  .then(function(found){
    res.send(found)
  })
})


// POST
// - new campus
// - new student
api.post('/campus', function(req, res, next){
  Campus.create(req.body)
  .then(function(created){
    res.send(created)
  })
})

api.post('/student', function(req, res, next){
  Student.create(req.body)
  .then(function(created){
    res.send(created)
  })
})

// PUT
// - updated student info for one student
// - updated campus info for one campus
//TODO PATH
api.put('/student/:studId', function(req, res, next){
  Student.findOrCreate(req.params.id)
  .then(function(result){
    if (result){
      Student.update(req.body)
    }else{
      Student.create(req.body)
    }
  })
})

api.put('/campus/:campId', function(req, res, next){

})

// DELETE
// - a campus
// - a student
api.delete('/student/:studId', function(req, res, next){

})

api.delete('/campus/:campId', function(req, res, next){

})

module.exports = api
