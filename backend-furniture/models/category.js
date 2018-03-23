var bookshelf = require('./../config/db').bookshelf
require('./furniture')
var Category = bookshelf.Model.extend({
  idAttribute: 'cat_id',
  tableName: 'category',
  furniture: function () {
    return this.hasMany('Furniture', 'cat_id')
  }
})

module.exports = bookshelf.model('Category', Category)
