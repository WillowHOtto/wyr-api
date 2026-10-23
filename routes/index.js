const express = require('express')

const router = express.Router()

const randomWYRQuestion = require('../model/wyr_questions')

router.get('/', function(req, res, next){
    res.send('Pleaseholder for home page')
})

router.get('/wyr', function(req, res, next) { 
   // const wyr = {
      //  'question': 'Live in a circle house or a triange house',
      //  'answer1': 'Circle house',
     //   'answer2': 'Triangle house'
   // }

   const wyr = randomWYRQuestion()

    res.json(wyr)
})

module.exports = router