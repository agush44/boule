import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { authToken } from "../middleware/authMiddleware.js";
import validate from "../middleware/validate.js";
import { productSchemaJoi } from "../validations/productValidation.js";

const productRoutes = Router();

productRoutes.get("/", getAllProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", validate(productSchemaJoi), authToken, addProduct);
productRoutes.put("/:id", validate(productSchemaJoi), authToken, updateProduct);
productRoutes.delete(
  "/:id",
  validate(productSchemaJoi),
  authToken,
  deleteProduct
);

export { productRoutes };
