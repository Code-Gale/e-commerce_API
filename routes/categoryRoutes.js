const router = require('express').Router()
const { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory} = require('../controllers/categoryController')

router.get('/categories', getCategories)
router.get('/categories/:id', getCategoryById)
router.post('/categories', createCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

module.exports = router