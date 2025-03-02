require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const cron = require("node-cron");

const yogaRouter = require("./routes/yoga.routes");

const app = express();

app.use(express.json());

// ✅ Use CORS only once with proper settings
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true, // Allow cookies & authentication headers
  })
);

app.use("/users", userRoutes);
app.use("/yoga", yogaRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});