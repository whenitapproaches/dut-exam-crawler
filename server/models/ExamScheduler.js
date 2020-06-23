const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ExamSchedulerSchema = new Schema({
  group: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number
  },
  date: {
    type: String
  },
  room: {
    type: String
  },
  time: {
    type: String
  }
})

const ExamScheduler = mongoose.model("ExamScheduler", ExamSchedulerSchema)

module.exports = ExamScheduler