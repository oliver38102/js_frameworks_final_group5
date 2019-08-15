const Pet = require('../models/pet');

exports.index = (req, res) => {
  Pet.find()
    .then(pets => res.status(200).json(pets))
    .catch(err => res.status(404).send(err));
};


exports.show = (req, res) => {
  Pet.findOne({
    _id: req.params.id
  })
    .then(pet => res.status(200).json(pet))
    .catch(err => res.status(404).json(err));
};


exports.create = async (req, res) => {
  Pet.create(req.body)
    .then(() => res.status(200).json({ success: "New pet created" }))
    .catch(err => res.status(404).json(err));
};


exports.update = (req, res) => {
  Pet.updateOne({
    _id: req.body.id
  }, req.body, {
      runValidators: true
    })
    .then(() => res.status(200).json({ success: "Pet updated" }))
    .catch(err => res.status(404).json(err));
};


exports.destroy = (req, res) => {
  Pet.deleteOne({
    _id: req.body.id
  })
    .then(() => res.status(200).json({ success: "Pet deleted" }))
    .catch(err => res.status(404).json(err));
};