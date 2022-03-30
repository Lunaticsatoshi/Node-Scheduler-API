import { scheduleJob } from "node-schedule";

import { scheduledEvent } from "../utils/scheduledEvent.js";

export const scheduleEvent = async (req, res) => {
  const { event } = req.body;
  const { text, date } = event;
  const job = scheduleJob(date, scheduledEvent(text));
  res.status(200).send(job);
};
