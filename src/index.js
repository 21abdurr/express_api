require("dotenv").config();
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const midedlewareLogReq = require("./middleware/logsAddNewData");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use(midedlewareLogReq);
app.use(express.json());
app.use("/users", userRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Running");
});
