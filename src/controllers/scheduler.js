import { scheduleJob } from "node-schedule";

export const scheduleEvent = async (req, res) => {
  const { event } = req.body;
  const { text, date } = event;
  try {
    const scheduleDate = new Date(date).toISOString();
    const job = await scheduleJob(scheduleDate, function () {
      const reversedText = text.split("").reverse().join("");
      setTimeout(() => {
        console.log(`${reversedText}`);
      }, text.length * 1000);
    });
    return res.status(200).json({ message: "Event scheduled successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
