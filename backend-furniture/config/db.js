var DBConfig = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'batam',
    charset: 'utf8'
  }
}

var knex = require('knex')(DBConfig)
var bookshelf = require('bookshelf')(knex)
bookshelf.plugin('registry')
module.exports.bookshelf = bookshelf
