var bookshelf = require('./../config/db').bookshelf
let Feedback = bookshelf.Model.extend({
  idAttribute: 'feedbacId',
  tableName: 'feedback'
})
module.exports = bookshelf.model('Feedback', Feedback)
