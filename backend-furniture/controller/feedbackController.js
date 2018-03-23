var Feedback = require('../models/feedback')
var saveFeedback = (req, res) => {
  new Feedback({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    gender: req.body.gender
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
var getFeedback = (req, res) => {
  var feedbackId = req.params.feedbackId
  new Feedback()
    .where('feedbackId', feedbackId)
    .fetch()
    .then(function (furniture) {
      res.json(furniture)
    })
    .catch(function (error) {
      console.log(error)
      res.json(error)
    })
}
var getAllFeedback = (req, res) => {
  new Feedback()
    .fetchAll()
    .then(furniture => {
      res.json(furniture)
    })
    .catch(error => {
      res.json(error)
    })
}
module.exports = {
  saveFeedback: saveFeedback,
  getFeedback: getFeedback,
  getAllFeedback: getAllFeedback
}
