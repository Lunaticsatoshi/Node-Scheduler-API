import express, { json } from "express";
import cors from "cors";

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

const PORT = process.env.PORT || 5000;

(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
