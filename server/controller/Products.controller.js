import Product from "../model/Product.model.js";
import mongoose from "mongoose";

// Get all products
export const getProducts =  async (req, res) => {
  try {
    const products = await Product.find();   
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

// Create a new product
export const createProducts = async (req, res) => {
  const product = req.body; // user will send the data 

	if (!product.name || !product.price ) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

  const newProduct = new Product(product);

	try {
		await newProduct.save();
		res.status(201).json({ success: true, data: newProduct });
	} catch (error) {
		console.error("Error in Creating product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}

}

// Update a product
export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const productData = req.body; 

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Product ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true}); 
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

// Delete a product
export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  console.log("id " + id);

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Product ID" });
  }
  
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
		console.error("Error in deleting product:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
}