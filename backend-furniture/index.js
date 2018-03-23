const app = require('./controller/app')

var server = app.listen(8081, function () {
  var port = server.address().port
  console.log('Web app hosted at : http://localhost:%s', port)
})

module.exports = app
