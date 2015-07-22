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
		args.splice(1, 0, component.get('editKey'), component.get('categoryId'))

		console.log('emitting', args, component.get('editKey'), component.get('categoryId'))

		component.get('emitListChange').apply(null, args)
	}

	component.on('startEditingCategoryName', function(event) {
		if (component.get('canEdit')) {
			component.set('editingCategoryName', true)
			component.find('input.categoryName').select()
		}
	})

	component.on('startEditingCategoryDescription', function(event) {
		if (component.get('canEdit')) {
			component.set('editingCategoryDescription', true)
			component.find('textarea.categoryDescription').select()
		}
	})

	component.on('categoryNameChange', function(event) {
		saveCategory()
		component.set('editingCategoryName', false)
	})

	component.on('categoryDescriptionChange', function() {
		saveCategory()
		component.set('editingCategoryDescription', false)
	})

	function saveCategory() {
		if (component.get('canEdit')) {
			var name = component.get('name')
			var description = component.get('description')
			emitListChange('editCategory', name, description)
		}
	}

	component.on('newItem', function() {
		var name = component.get('newItemName')
		if (name) {
			component.set('newItemName', '')
			emitListChange('newItem', name)
		}
	})

	component.on('removeItem', function(event) {
		var itemId = event.node.dataset.itemId
		emitListChange('removeItem', itemId)
	})
}
