const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
require('./config/mongo')

const atention_router = require('./routes/atention')
const profesional_router = require('./routes/profesional')

app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());
app.use(cors())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/atention',atention_router);
app.use('/profesional',profesional_router)