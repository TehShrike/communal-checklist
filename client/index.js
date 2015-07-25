var home = require('./home')
var list = require('./list')
var router = require('./router')
require('ractive').DEBUG = false

router.add('/home', home)

router.add('/list/:listId', function(parameters) {
	list(parameters.listId)
})

router.add('/list/:editKey/:listId', function(parameters) {
	list(parameters.listId, parameters.editKey)
})

router.evaluateCurrent('/home')
