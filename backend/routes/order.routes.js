import express from "express";

const router = express.Router();

router.post("/orders", createOrder);   // Customer
router.get("/orders/my", getMyOrders);  // Customer
router.get("/orders/seller", getSellerOrders); // Seller
router.get("/orders/:id", getOrderById); 
router.put("/orders/:id/status", updateOrderStatus); // Seller

export default router;