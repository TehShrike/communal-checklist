var Ractive = require('ractive')
var extend = require('xtend')
var state = require('./client-state')
var template = require('fs').readFileSync('client/item.html', { encoding: 'utf8' })

module.exports = Ractive.extend({
	template: template,
	oninit: function() {
		handleItemComponent(this)
	}
})

function handleItemComponent(component) {

	function emitItemChange(key, object) {
		var emitCategoryChange = component.get('emitCategoryChange')

		emitCategoryChange(key, extend({
			itemId: component.get('itemId')
		}, object))
	}

	component.on('addCheckbox', function() {
		emitItemChange('addCheckbox')
	})
	component.on('removeCheckbox', function() {
		emitItemChange('removeCheckbox')
	})

	component.on('editItem', function(event) {
		component.set('editingItem', true)
	})

	component.on('saveItem', function(event, name, url) {
		console.log('got', name, url)
		emitItemChange('editItem', {
			item: {
				name: name,
				url: url
			}
		})
		component.set('editingItem', false)
	})

	component.on('checkboxClicked', function(event) {
		var checkbox = event.context
		var checked = event.node.checked
		var name = component.get('currentName')

		emitItemChange(checked ? 'check' : 'uncheck', { checkboxId: checkbox.id, name: name })
	})
}
