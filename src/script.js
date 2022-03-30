async function scheduleEvents(events) {
    await Promise.all(events.map(async (event) => {
        await fetch("http://localhost:8000/api/schedule-event", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        });
    }));
}

const events = [
    {
        text: "Text One",
        date: "2022-03-30 21:49:00.000",
    },
    {
        text: "Hello World",
        date: "2022-03-30 21:50:00.000",
    },
];

scheduleEvents(events);