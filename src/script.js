import fetch from "node-fetch";

async function scheduleEvents(events) {
  await Promise.all(
    events.map(async (event) => {
      await fetch("http://localhost:8000/api/v1/schedule/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ event }),
      });
    }),
  );
}

const events = [
  {
    text: "Text One",
    date: "2022-03-30 21:54:00.000",
  },
  {
    text: "Hello World",
    date: "2022-03-30 21:55:00.000",
  },
];

scheduleEvents(events);
