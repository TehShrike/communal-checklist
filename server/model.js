const q = require('sql-concat')
const mysql = require('mysql')

const joiList = Joi.object({
	pk: Joi.number().integer().max(4294967295).min(0).invalid(null),
	id: Joi.string().max(36).invalid(null),
	editKey: Joi.string().max(36).invalid(null),
	other: Joi.allow(null),
	version: Joi.number().integer().max(16777215).min(0).invalid(null)
})

const joiCategory = Joi.object({
	pk: Joi.number().integer().max(4294967295).min(0).invalid(null),
	id: Joi.string().max(36).invalid(null),
	name: Joi.string().max(65535).allow(null),
	description: Joi.allow(null),
	listId: Joi.string().max(36).invalid(null)
})

const joiItem = Joi.object({
	pk: Joi.number().integer().max(4294967295).min(0).invalid(null),
	id: Joi.string().max(36).invalid(null),
	name: Joi.string().max(65535).allow(null),
	url: Joi.string().max(65535).allow(null),
	categoryId: Joi.string().max(36).invalid(null)
})

const joiCheckbox = Joi.object({
	pk: Joi.number().integer().max(4294967295).min(0).invalid(null),
	id: Joi.string().max(36).invalid(null),
	checkedBy: Joi.string().max(65535).allow(null),
	itemId: Joi.string().max(36).invalid(null)
})
