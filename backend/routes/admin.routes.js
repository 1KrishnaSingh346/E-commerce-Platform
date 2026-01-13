import express from "express";
const router = express.Router();

router.get("/sellers", getAllSellers); // Admin
router.put("/sellers/:id/approve", approveSeller);
router.put("/sellers/:id/reject", rejectSeller);
router.get("/orders", getAllOrders); // Admin

export default router;