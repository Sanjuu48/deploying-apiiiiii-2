const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./Routes/MenuRoutes.js');

require('dotenv').config();

const app = express();
app.use('/menu', menuRoutes);
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

