const express = require('express');
const router = express.Router();
const sequelize = require('../models');


router.get('/', (req, res) => {
    // Récupérer tous les tags dans ma BDD
    sequelize.models.tag.findAll()
    .then(tags => res.json(tags))
})


router.get('/:tagsId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.tag.findByPk(req.params.tagsId)
    .then(tags => res.json(tags))
})

module.exports = router;