const express = require('express');
const connectDB = require('./db/db');
const router = require('./route/route');
const app = express();
const PORT = 5000;

// Middleware setup
app.use(express.json());
app.use("/", router);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database', err);
});

module.exports = app;
