import { Router } from "express";

import { scheduleEvent } from "../../controllers/scheduler.js";

export const router = Router();

router.get('/schedule/test', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
})


// @desc     Create task sc
// @route    POST /api/v1/schedule/create
// @access   Public
// @method  scheduleEvent
router.post('/schedule/create', scheduleEvent);