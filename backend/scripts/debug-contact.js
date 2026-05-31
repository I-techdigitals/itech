const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Load env vars
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const contactRouter = require("../routes/contact");

const app = express();
app.use(express.json());
app.use("/api/contact", contactRouter);

// Start server on a random port
const server = app.listen(0, async () => {
  const port = server.address().port;
  console.log(`Test server running on port ${port}`);

  // Try connecting to DB if MONGO_URI is set
  try {
    if (process.env.MONGO_URI) {
      await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 2000 });
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.warn("MongoDB connection failed:", err.message);
  }

  // Perform a test POST request to /api/contact
  const payload = {
    name: "Test User",
    email: "test@example.com",
    phone: "12345678",
    service: "Web & App Development",
    message: "This is a test message to debug the 500 error."
  };

  try {
    console.log("Sending POST /api/contact...");
    const response = await fetch(`http://127.0.0.1:${port}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);
  } catch (err) {
    console.error("Fetch request failed:", err);
  } finally {
    await mongoose.disconnect();
    server.close();
  }
});
