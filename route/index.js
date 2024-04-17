import taskRoute from "./taskRoute.js";
import  checkListRoute from "./checkListRoute.js";
import express from "express";
const router = express.Router();
router.use("/tasks",taskRoute);
router.use("/checkList",checkListRoute);

export default router;