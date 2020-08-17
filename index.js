const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const dataRouter = require('./routes/data-router')

const app = express()
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded( {extended : true} ))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', dataRouter)

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))