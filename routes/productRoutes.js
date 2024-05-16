const router = require('express').Router()
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.put('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router