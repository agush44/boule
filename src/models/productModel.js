import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, min: 0, max: 100000 },
    stock: { type: Number, min: 0, max: 1000 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

const getAllProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw {
      status: 500,
      message: "Error retrieving products from the database.",
    };
  }
};

const getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw {
        status: 404,
        message: "Product not found.",
      };
    }
    return product;
  } catch (error) {
    throw {
      status: 500,
      message: "Error retrieving product from the database.",
    };
  }
};

const addProduct = async (dataProduct) => {
  try {
    const newProduct = new Product(dataProduct);
    await newProduct.save();
    return newProduct;
  } catch (error) {
    if (error.code === 11000) {
      throw {
        status: 409,
        message: "Duplicate name: A product with this name already exists.",
      };
    }
    throw {
      status: 500,
      message: "Error creating the product",
    };
  }
};

const updateProduct = async (id, updateData) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      throw {
        status: 404,
        message: "Product not found.",
      };
    }
    Object.assign(product, updateData);
    await product.save();
    return product;
  } catch (error) {
    throw {
      status: 500,
      message: "Error updating the product",
    };
  }
};

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      throw {
        status: 404,
        message: "Product not found.",
      };
    }
    return deletedProduct;
  } catch (error) {
    throw {
      status: 500,
      message: "Error deleting the product",
    };
  }
};

export default {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
