const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('./db');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

connectToDatabase();

const authRoutes = require('./routes/authRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');

app.use('/auth', authRoutes);
app.use('/blog', blogPostRoutes);

app.listen(PORT, () => console.log(`Server je na portu: ${PORT}`));






