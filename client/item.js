var Ractive = require('ractive')
var extend = require('xtend')
var state = require('./client-state')
var template = require('fs').readFileSync('client/item.html', { encoding: 'utf8' })
var urlIsValid = require('is-url-superb')
var createAffiliateFunction = require('add-affiliate-querystring')

module.exports = Ractive.extend({
	template: template,
	oninit: function() {
		handleItemComponent(this)
	},
	data: {
		makeAffiliateLink: createAffiliateFunction('amazon.com', 'tag', 'josduf-20'),
		urlIsValid: urlIsValid
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
		component.find('.item-name').focus()
	})

	component.on('removeItem', function() {
		component.set('editingItem', false)
		emitItemChange('removeItem')
	})

	component.on('saveItem', function(event, name, url) {
		emitItemChange('editItem', {
			item: {
				name: name,
				url: url
			}
		})
		component.set('editingItem', false)

		return false
	})

	component.on('checkboxClicked', function(event) {
		var checkbox = event.context
		var checked = event.node.checked
		var name = component.get('currentName')

		emitItemChange(checked ? 'check' : 'uncheck', { checkboxId: checkbox.id, name: name })
	})
}
