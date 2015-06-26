var home = require('./home')
var list = require('./list')
var router = require('./router')

router.add('/home', home)

router.add('/list/:listId/:editKey?', function(parameters) {
	list(parameters.listId, parameters.editKey)
})

router.evaluateCurrent('/home')
