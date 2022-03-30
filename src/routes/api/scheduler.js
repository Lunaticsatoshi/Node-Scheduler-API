import { Router } from "express";

import { scheduleEvent } from "../controllers/scheduler.js";

export const router = Router();


// @desc     Create task sc
// @route    POST /api/v1/schedule/create
// @access   Public
// @method  scheduleEvent
router.post('/schedule', scheduleEvent);