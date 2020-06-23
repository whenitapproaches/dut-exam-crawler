const mongoose = require('mongoose')

module.exports = function connectDatabase() {
  mongoose.connect('mongodb://localhost:27017/dut_examSchedulers', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },(err) => {
    if(err) return console.log(err)
    console.log("Database connected")
  })
}