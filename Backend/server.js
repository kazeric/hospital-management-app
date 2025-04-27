const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./configs/db");
const rateLimit = require("express-rate-limit");



const clientRoutes = require("./routes/clientRoutes");
const programRoutes = require("./routes/programRoutes");

//initialise the server
const app = express();
app.use(cors());
app.use(express.json());

//prevent DOS attacks by ading limits to requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(apiLimiter);

// Connect to database
connectDB();

// Routes
app.use("/clients", clientRoutes);
app.use("/programs", programRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Health Info System API running at http://localhost:${PORT}`);
});
