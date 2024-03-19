 const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());



// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/new");



// Routes
app.use("/api/v1", userRoutes);



// Listen to port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
