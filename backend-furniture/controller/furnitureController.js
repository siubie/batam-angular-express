var Furniture = require('../models/furniture')
var saveFurniture = (req, res) => {
  new Furniture({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    cat_id: req.body.cat_id,
    images: req.body.images,
    item_code: req.body.item_code,
    dimensions: req.body.dimensions
  })
    .save()
    .then(function (furniture) {
      res.json(furniture)
    })
    .catch(function (error) {
      console.log(error)
      res.json('An error occured')
    })
}
var getFurniture = (req, res) => {
  var furnitureId = req.params.furnitureId
  new Furniture()
    .where('it_id', furnitureId)
    .fetch()
    .then(function (furniture) {
      res.json(furniture)
    })
    .catch(function (error) {
      console.log(error)
      res.json(error)
    })
}
var getAllFurniture = (req, res) => {
  new Furniture()
    .fetchAll()
    .then(furniture => {
      res.json(furniture)
    })
    .catch(error => {
      res.json(error)
    })
}
var deleteFurniture = (req, res) => {
  var furnitureId = req.params.furnitureId
  new Furniture()
    .where('it_id', furnitureId)
    .destroy()
    .then(furniture => {
      res.json(furniture)
    })
    .catch(error => {
      res.json(error)
    })
}

var getFurnitureByCategory = (req, res) => {
  var catId = req.params.catId
  new Furniture()
    .where('cat_id', catId)
    .fetchAll()
    .then(furniture => {
      res.json(furniture)
    })
    .catch(error => {
      res.json(error)
    })
}
module.exports = {
  saveFurniture: saveFurniture,
  getFurniture: getFurniture,
  getAllFurniture: getAllFurniture,
  deleteFurniture: deleteFurniture,
  getFurnitureByCategory: getFurnitureByCategory
}
