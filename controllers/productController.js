const Product = require('../models/Product')
//add, update, get, delete

//get all products
const getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        if(!products){
            res.status(404).json({message : 'No Products Found'})
        }
        res.status(201).json({products})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

//get specific product
const getProductById = async (req, res) => {
    try{
        const product = await Product.find(req.params.id)
        if(!product){
            res.status(404).json({message : 'Product not found...'})
        }
        res.status(201).json(products)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

//create new product
const  createProduct = async (req, res) => {
    try{
        const product = req.body
        const newProduct = await new Product(product)
        res.status(201).json(newProduct)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

const updateProduct = async (req, res) =>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
        if(!product){
            res.status(404).json({message : 'Product not found...'})
        }
        res.status(201).json(updatedProduct)
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

const deleteProduct = async(req, res) => {
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json({message : 'Product Deleted Successfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}