import express from "express"
import authMiddleware from "../middleware/auth.js"


const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware);

export default orderRouter;