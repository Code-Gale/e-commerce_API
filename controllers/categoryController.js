//crrud
const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      res.status(404).json({ message: "Category Not Found..." });
    }
    res.status(201).json({categories});
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({ message: "Category Not Found" });
    }
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const existingCategory = await Category.findOne({ name : req.body.name})
    if(existingCategory){
      return res.status(400).json({message : 'Category already exists'})
    }
    const category = new Category(req.body);
    const newCategory = await category.save();
    res.status(201).json({ newCategory });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body);
    if (!category) {
      res.status(404).json({ message: "Category not found" });
    }
    const updatedCategory = await Category.findById(req.params.id)
    res.status(201).json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      res.status(404).json({ message: "Category not found" });
    }
    res.status(201).json({ message: "Category Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
