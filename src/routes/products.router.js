import { Router } from "express";
import {auth} from "../middlewares/auth.middleware.js";
import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct, updateProduct} from "../controllers/products.controllers.js";

const router = Router();

router.get('/products', getAllProducts );
router.get('/products/search',searchProducts );
router.get('/products/:id', getProductById);
router.post('/products', auth , createProduct);
router.delete('/products/:id', auth  ,deleteProduct);
router.put("/products/:id", auth , updateProduct);

export default router;