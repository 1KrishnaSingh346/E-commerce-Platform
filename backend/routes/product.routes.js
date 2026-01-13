import express from "express";

const router = express.Router();

router.post("/products", products);   // Seller
router.get("/products", getAllProducts);  // Public
router.get("/products/:id", getProductById); 
router.put("/products/:id", updateProduct);    // Seller
router.delete("/products/:id", deleteProduct); // Seller

export default router;