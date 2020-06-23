const ExamScheduler = require("../models/ExamScheduler")

module.exports = {
  async init() {
    await ExamScheduler.deleteMany({})
    let {table, generalTable} = await fetchData()
    let data = table.map((row) => {
      return {
        group: row[1],
        name: row[2],
        amount: row[3],
        date: row[4],
        room: row[5],
        time: row[6],
      }
    })
    await ExamScheduler.create(data)
    let generalData = generalTable.map(row => {
      return {
        group: row[1],
        name: row[2],
        date: row[4],
        time: row[3]
      }
    })
    await ExamScheduler.create(generalData)
    console.log("Table initialised")
  },
  async getAll(req, res) {
    let all = await ExamScheduler.find()
    return res.send(all)
  },
}
