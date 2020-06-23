const express = require('express')
const app = express()
const cors = require('cors')
const fetchData = require('./services/fetchData')

const connectDatabase = require('./database/init')

const examSchedulerRouter = require('./routes/examSchedulerRouter')

app.use(cors())

app.use('/api/', examSchedulerRouter)

connectDatabase();



app.listen(3000, '', () => {
  console.log("Server is listening")

})