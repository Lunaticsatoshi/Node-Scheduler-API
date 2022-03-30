import { scheduleJob } from "node-schedule"

export const scheduleEvent = async (req, res) => {
    const { event } = req.body;
    const { text, date } = event;
    const job = scheduleJob(start, () => {
        console.log(`${name} has started!`);
    });
    res.status(200).send(job);
}