/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
// require("dotenv").config();
const authRoutes = require('./routes/auth');
const bookingRoutes = require("./routes/booking");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => console.log("MongoDB connected"))
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.error("MongoDB connection error:",err));

// Routes
app.use("/api/bookings", require("./routes/booking"));

app.get("/", (req, res) => res.send("Taxi Booking Server is running"));
app.use('/api/auth', authRoutes);
app.use("/api/bookings", bookingRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('./routes/auth');
const bookingRoutes = require("./routes/booking");

dotenv.config();

const app = express();

// ✅ Allow CORS only from your Vercel frontend
app.use(cors({
  origin: 'https://taxi-booking-app-sjvc-8ppur2foh-sodhavanraj7s-projects.vercel.app',
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => res.send("🚖 Taxi Booking Server is running"));

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
