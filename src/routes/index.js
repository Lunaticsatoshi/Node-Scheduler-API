import { Router } from "express";
import { router as apiRoutes } from "./api/scheduler.js";

export const router = Router();

router.use("/api/v1", apiRoutes);