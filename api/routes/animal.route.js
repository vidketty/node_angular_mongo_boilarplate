const express = require('express');
const app = express();
const routes = express.Router();

// Require animal model in our routes module
let Animal = require('../models/animal');

routes.route('/add').post(function (req, res) {

  const { name, gender, type } = req.body;
  let animal = new Animal({
    name,
    gender,
    type,
    adopted: false
  });

  animal.save()
    .then(animal => {
      res.status(200).json({ 'animal': 'animal in added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

routes.route('/').get(function (req, res) {
  Animal.find({
    adopted: false
  }, function (err, animales) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(animales);
    }
  });
});

routes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Animal.findById(id, function (err, animal) {
    res.json(animal);
  });
});

routes.route('/update/:id').post(function (req, res) {
  Animal.findById(req.params.id, function (err, animal) {
    if (!animal)
      return next(new Error('Could not load Document'));
    else {
      animal.name = req.body.name;
      animal.adopted = true;

      animal.save().then(animal => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

routes.route('/').get(function (req, res) {
  Animal.find({ adopted: true }, function (err, animals) {
    if (err) res.json(err);
    else res.json(animals);
  });
});


routes.route('/adopted').get(function (req, res) {
  Animal.find({ adopted: true }, function (err, animals) {
    if (err) res.json(err);
    else res.json(animals);
  });
});

routes.route('/adopt/:id').post(function (req, res) {
  const id = req.params.id;
  Animal.findOneAndUpdate({ _id: id }, { $set: { adopted: true } }, function (err, animals) {
    if (err) res.json(err);
    else res.json(animals);
  });
});

module.exports = routes;