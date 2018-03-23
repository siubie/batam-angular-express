var Category = require('../models/category')
/* Save a user */
var saveCategory = function (req, res) {
  new Category({
    cat_name: req.body.cat_name,
    cat_description: req.body.cat_description
  })
    .save()
    .then(function (user) {
      res.json(user)
    })
    .catch(function (error) {
      console.log(error)
      res.json('An error occured')
    })
}

/* Get all users */
var getAllCategory = function (req, res) {
  new Category()
    .fetchAll()
    .then(function (users) {
      res.json(users)
    })
    .catch(function (error) {
      console.log(error)
      res.json('An error occured')
    })
}

/* Delete a user */
var deleteCategory = function (req, res) {
  var catId = req.params.catId
  console.log(catId)
  new Category()
    .where('cat_id', catId)
    .destroy()
    .then(function (category) {
      res.json(category)
    })
    .catch(function (error) {
      console.log(error)
      res.json(error)
    })
}

/* Get a user */
var getCategory = function (req, res) {
  var catId = req.params.catId
  new Category()
    .where('cat_id', catId)
    .fetch({ withRelated: ['furniture'] })
    .then(function (category) {
      // console.log(JSON.stringify(category.related('furniture')))
      res.json(category)
    })
    .catch(function (error) {
      console.log(error)
      res.json('An error occured')
    })
}

/* Exports all methods */
module.exports = {
  saveCategory: saveCategory,
  getAllCategory: getAllCategory,
  deleteCategory: deleteCategory,
  getCategory: getCategory
}
