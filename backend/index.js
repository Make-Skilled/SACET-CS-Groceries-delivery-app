const express = require("express");
const connectDB = require("./db/connectDB");
const commonRoutes = require("./routes/common/commonRoutes");
const adminRoutes = require("./routes/admin/adminRoutes");
const customerRoutes = require("./routes/customer/customerRoutes")
const cors = require("cors"); // Import CORS
require("dotenv").config();

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON
connectDB();

app.use("/api/common", commonRoutes); // Mount common routes
app.use("/api/admin" , adminRoutes);
app.use("/api/customer",customerRoutes);

const PORT = 5432;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
