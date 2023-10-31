const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./book/config');
const bookRoutes = require('./book/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connecting to MongoDB
connectDB();

// Defining routes
app.use('/api/books', bookRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
