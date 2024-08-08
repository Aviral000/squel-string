const express = require('express');
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require("./routes/documentRoutes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

const PORT = process.env.PORT;

mongoose.connect("mongodb://localhost:27017")
    .then(() => "DB CONNECTED")
    .catch((err) => console.log(err))

app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);

app.listen(PORT, () => {
    console.log('server connected')
})