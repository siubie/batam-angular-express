var express = require('express')
var bodyParser = require('body-parser')
var urlEncodedParser = bodyParser.urlencoded({ extended: false })
var app = express()
var path = require('path')
var jsonParser = bodyParser.json()
var Promise = require('bluebird')
var categoryController = require('./categoryController')
var furnitureController = require('./furnitureController')
var feedbackController = require('./feedbackController')
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  next()
}
app.use(express.static('./public'))
app.use(allowCrossDomain)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// category
app.get('/api/category', categoryController.getAllCategory)
app.get('/api/category/:catId', categoryController.getCategory)
app.post('/api/category', categoryController.saveCategory)
app.delete('/api/category/:catId', categoryController.deleteCategory)
// furniture
app.get('/api/furniture', furnitureController.getAllFurniture)
app.get('/api/furniture/:furnitureId', furnitureController.getFurniture)
app.post('/api/furniture', furnitureController.saveFurniture)
app.delete('/api/furniture/:furnitureId', furnitureController.deleteFurniture)
app.get(
  '/api/category/:catId/furniture',
  furnitureController.getFurnitureByCategory
)
// feedback
app.get('/api/feedback', feedbackController.getAllFeedback)
app.get('/api/feedback/:feedbackId', feedbackController.getFeedback)
app.post('/api/feedback', feedbackController.saveFeedback)

// Catch all
app.use(function (req, resp) {
  resp.redirect('/')
})

module.exports = app
