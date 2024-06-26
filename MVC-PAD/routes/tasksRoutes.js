const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/update', TaskController.attTask)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTasks)

module.exports = router