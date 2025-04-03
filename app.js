require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const bodyParser = require("body-parser");
const { connect } = require("./config");

// Importing Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const companyRoutes = require("./routes/company");

// Importing Verifying Token Middleware
const verifyToken = require("./middleware/verify");

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb",
    parameterLimit: 50000,
  })
);

// Starting MongoDB
connect();

// Routes
app.use("/auth", authRoutes);
app.use("/user", verifyToken, userRoutes);
app.use("/company", verifyToken, companyRoutes);

// Server Listening
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
