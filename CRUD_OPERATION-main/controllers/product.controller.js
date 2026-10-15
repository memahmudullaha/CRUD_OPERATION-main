import Product from '../models/product.model.js';

const CreateProduct = async (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: "Product data is required" });
    }

    const product = await Product.create(data);

    console.log("Product Data Created", data)
   
    res.status(201).json({
        message: "Create Product Successfully",
        data: product
    })
}


const GetProduct = async (req, res) => {
    const products = await Product.find();

    res.json({
        message: "Get All Products Successfully",
        data: products
    })
}


const UpdateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.quantity = req.body.quantity;

    await product.save();

     res.json({
        message: "Update Product Successfully",
        data: product
    })
}

const DeleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json({
        message: "Delete Product Successfully"
    })
}

export default {
 CreateProduct,
 GetProduct,
 UpdateProduct,
 DeleteProduct
}