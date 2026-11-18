const express = require('express')

const apiRouter = require('./routes/api')

const app = express()

app.use('/', express.static('client')) 

app.use('/api', apiRouter)

const server = app.listen(process.env.PORT || 3000, function(){
    console.log('Server running on port', server.address().port)
})