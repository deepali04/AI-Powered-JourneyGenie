const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();
app.use(cors());
// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));