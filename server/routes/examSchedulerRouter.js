const router = require('express').Router()

const {init, getAll} = require('../controllers/examSchedulerController')

init()

router.get("/", getAll)

module.exports = router