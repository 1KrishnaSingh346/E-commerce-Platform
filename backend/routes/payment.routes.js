import express from "express";
const router = express.Router();
router.post("/payments/create", createPayment); // Customer
router.post("/payments/verify", verifyPayment); // Customer
export default router;  