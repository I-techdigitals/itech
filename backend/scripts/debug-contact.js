const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const contactRouter = require("../routes/contact");

const app = express();
app.use(express.json());
app.use("/api/contact", contactRouter);

const server = app.listen(0, async () => {
  const port = server.address().port;
  console.log(`Test server running on port ${port}`);

  const payload = {
    name: "Test User",
    email: "test@example.com",
    phone: "12345678",
    service: "Web & App Development",
    message: "This is a test message.",
  };

  try {
    const response = await fetch(`http://127.0.0.1:${port}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status);
    console.log("Response data:", await response.json());
  } catch (err) {
    console.error("Fetch request failed:", err);
  } finally {
    server.close();
  }
});
