const express = require('express');
const router = express.Router();
const sequelize = require('../models');

router.get('/users', (req, res) => {
    // Récupérer tous les utilisateurs dans ma BDD
    sequelize.models.user.findAll()
    .then(users => res.json(users))
})

router.get('/users/:userId',(req,res) => {
    // userId peut être récupéré en faisant un req.params.id
    sequelize.models.user.findByPk(req.params.userId)
    .then(user => res.json(user))
})

router.patch("/:userId", (req, res) => {

    sequelize.models.users
  
      .update(req.body, { where: { id: req.params.userId } })
  
      .then((users) => res.status(200).json(users));
  
  });

  router.post("/", (req, res) => {

    sequelize.models.users
  
      .create(req.body)
  
      .then((users) => res.status(201).json(users));
  
  });

module.exports = router;