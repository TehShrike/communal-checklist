var Ractive = require('ractive')
var state = require('./client-state')
var template = require('fs').readFileSync('client/category.html', { encoding: 'utf8' })

module.exports = Ractive.extend({
	template: template,
	oninit: function() {
		handleCategoryComponent(this)
	},
	components: {
		item: require('./item')
	}
})

function handleCategoryComponent(component) {

	function emitListChange() {
		var args = Array.prototype.slice.call(arguments)
		args.splice(1, 0, component.get('categoryId'))

		component.get('emitListChange').apply(null, args)
	}

	component.on('startEditingCategoryName', function(event) {
		if (component.get('canEdit')) {
			component.set('editingCategoryName', true)
			component.find('input.categoryName').select()
		}
	})

	component.on('categoryNameChange', function(event) {
		if (component.get('canEdit')) {
			var name = component.get('name')
			var editKey = component.get('editKey')

			component.set('editingCategoryName', false)
			emitListChange('editCategory', editKey, name)
		}
	})

	component.on('newItem', function() {
		var name = component.get('newItemName')
		if (name) {
			component.set('newItemName', '')
			emitListChange('newItem', component.get('editKey'), name)
		}
	})

	component.on('removeItem', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('removeItem', component.get('editKey'), itemId)
	})
}
