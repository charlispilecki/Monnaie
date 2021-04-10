const db = require("../models");

// Defining methods for the vendorsController
module.exports = {
  findAll: function(req, res) {
    if (!req.user) {
      console.log('Not logged in')
      res.status(422).json('Not logged in')
    } else {
      console.log('Getting vendors for ' + req.user.username)
      db.Vendor
        .find({username: req.user.username})
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function(req, res) {
    db.Vendor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('Creating vendor for ' + req.user.username)
    let vendor = req.body
    vendor.username = req.user.username
    db.Vendor
      .create(vendor)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Vendor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Vendor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


