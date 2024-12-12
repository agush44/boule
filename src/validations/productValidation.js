import Joi from "joi";

const productSchemaJoi = Joi.object({
  name: Joi.string().min(3).required().messages({
    "string.min": "Product name must be at least 3 characters long.",
    "any.required": "Product name is required.",
  }),
  description: Joi.string().min(10).required().messages({
    "string.min": "Description must be at least 10 characters long.",
    "any.required": "Description is required.",
  }),
  price: Joi.number().min(0).max(100000).required().messages({
    "number.min": "Price must be at least 0.",
    "number.max": "Price cannot exceed 100,000.",
    "any.required": "Price is required.",
  }),
  stock: Joi.number().min(0).max(1000).required().messages({
    "number.min": "Stock must be at least 0.",
    "number.max": "Stock cannot exceed 1,000.",
    "any.required": "Stock is required.",
  }),
});

export { productSchemaJoi };
