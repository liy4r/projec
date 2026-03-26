import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "";

app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRouter);
// app.use("/api/movies", moviesRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB (book_system)");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

export default app;
