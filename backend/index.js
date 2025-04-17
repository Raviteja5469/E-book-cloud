const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Init app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/books", require("./routes/books"));
// app.use("/api/reviews", require("./routes/reviews"));
// app.use("/api/users", require("./routes/users"));

// Correctly map /api/users/login and /api/users/register
app.use("/api/users", require("./routes/users"));

// Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.green.bold));
