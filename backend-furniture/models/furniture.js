var bookshelf = require('./../config/db').bookshelf
require('./category')
let Furniture = bookshelf.Model.extend({
  idAttribute: 'it_id',
  tableName: 'furniture',
  category: function () {
    return this.belongsTo('Category', 'cat_id')
  }
})
module.exports = bookshelf.model('Furniture', Furniture)
