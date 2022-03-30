import express, { json } from "express";
import cors from "cors";

// Middlewares
import { notFound, errorHandler } from "./middlewares/error.js";

import { router as indexRouter } from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: "*",
    maxAge: 86400,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: [
      "access-token",
      "refresh-token",
      "content-type",
      "content-length",
    ],
  }),
);

app.use(json());

app.set("trust proxy", 1);

const PORT = process.env.PORT || 8000;

app.use("/", indexRouter);

app.use(notFound);
app.use(errorHandler);

(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
