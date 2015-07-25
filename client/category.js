var Ractive = require('ractive')
var extend = require('xtend')
var state = require('./client-state')
var template = require('fs').readFileSync('client/category.html', { encoding: 'utf8' })

var paragraphs = Ractive.extend({
	isolated: true,
	oninit: function() {
		var component = this
		component.observe('text', function(text) {
			component.set('paragraphs', text.split(/\n+/).filter(function(str) {
				return !str.match(/^\s*$/)
			}))
		})
	},
	last: function(n) {
		return n == component.get('paragraphs').length - 1
	},
	template: '{{#paragraphs:i}}<p>{{.}} {{#if i == paragraphs.length - 1 }}{{>content}}{{/if}}</p>{{/paragraphs}}'
})

module.exports = Ractive.extend({
	template: template,
	oninit: function() {
		handleCategoryComponent(this)
	},
	components: {
		item: require('./item'),
		paragraphs: paragraphs
	},
	data: {
		newItemName: ''
	}
})

function handleCategoryComponent(component) {

	function emitCategoryChange(key, object) {
		component.get('emitListChange')(key, extend({
			categoryId: component.get('categoryId')
		}, object))
	}

	component.set('emitCategoryChange', emitCategoryChange)

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
			emitCategoryChange('editCategory', {
				name: component.get('name'),
				description: component.get('description')
			})
		}
	}

	component.on('newItem', function() {
		var name = component.get('newItemName')
		if (name) {
			component.set('newItemName', '')
			emitCategoryChange('newItem', { name: name })
		}
	})

	component.on('removeItem', function(event) {
		var itemId = event.node.dataset.itemId
		emitCategoryChange('removeItem', { itemId: itemId })
	})
}
