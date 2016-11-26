const storage = require('leveldown')
const levelup = require('levelup')
const fs = require('fs')
const sql = require('sql-tagged-template-literal')
const db = levelup('./leveldb-storage', {
	db: storage,
	valueEncoding: 'json'
})

const outStream = fs.createWriteStream('./dump.sql')

db.createReadStream().on('data', data => {
	const list = data.value

	const listCategories = []
	const listItems = []
	const listCheckboxes = []

	if (Array.isArray(list.categories)) {
		const categories = list.categories
		delete list.categories

		categories.filter(category => Array.isArray(category.items)).forEach(category => {
			const items = category.items
			delete category.items

			items.filter(item => Array.isArray(item.checkboxes)).forEach(item => {
				const checkboxes = item.checkboxes
				delete item.checkboxes

				checkboxes.forEach(checkbox => {
					checkbox.itemId = item.id
					listCheckboxes.push(checkbox)
				})

				item.categoryId = category.id
				listItems.push(item)
			})

			category.listId = list.id
			listCategories.push(category)
		})

		outStream.write(listQuery(list))
		outStream.write(listCategories.map(categoryQuery).join(''))
		outStream.write(listItems.map(itemQuery).join(''))
		outStream.write(listCheckboxes.map(checkboxQuery).join(''))
	}
}).on('error', err => {
	console.error('error:', err)
})

// { id, editKey, other, version }
function listQuery({ id, editKey, other, version }) {
	return sql`
INSERT INTO list (id, editKey, other, version)
VALUES (${id}, ${editKey}, ${other}, ${version});`
}

function categoryQuery({ id, name, description, listId }) {
	return sql`
INSERT INTO category (id, name, description, listId)
VALUES (${id}, ${name}, ${description}, ${listId});
`
}

function itemQuery({ id, name, url, categoryId }) {
	return sql`
INSERT INTO item (id, name, url, categoryId)
VALUES (${id}, ${name}, ${url}, ${categoryId});
`
}

function checkboxQuery({ id, checkedBy, itemId }) {
	return sql`
INSERT INTO checkbox (id, checkedBy, itemId)
VALUES (${id}, ${checkedBy}, ${itemId});
`
}