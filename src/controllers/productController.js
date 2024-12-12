import Product from "../models/productModel.js";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.getProductById(id);

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  const { name, description, price, stock } = req.body;
  try {
    if (!name || !description || !price || !stock) {
      return res.status(400).json({
        status: 400,
        error: "All fields (name, description, price, stock) are required.",
      });
    }

    const newProduct = await Product.addProduct({
      name,
      description,
      price,
      stock,
    });

    if (!newProduct) {
      return res.status(400).json({
        status: 400,
        error: "Failed to create a product. Please try again.",
      });
    }

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedProduct = await Product.updateProduct(id, updateData);

    if (!updatedProduct) {
      return res.status(400).json({
        status: 400,
        error: "Product not found.",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: 400,
        error: "Product ID is required.",
      });
    }

    const deletedProduct = await Product.deleteProduct(id);

    if (!deletedProduct) {
      return res.status(400).json({
        status: 400,
        error: "Product not found.",
      });
    }

    res.status(200).json({ message: "Product successfully deleted." });
  } catch (error) {
    next(error);
  }
};

export {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
