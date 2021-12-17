const express = require('express');
const router = express.Router();
const sequelize = require('../models');

router.get('/tasks', (req, res) => {
    // Récupérer tous les tasks dans ma BDD
    sequelize.models.task.findAll()
    .then(tasks => res.json(tasks))
})

router.get('/tasks/:tasksId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.task.findByPk(req.params.tasksId)
    .then(tasks => res.json(tasks))
})

module.exports = router;