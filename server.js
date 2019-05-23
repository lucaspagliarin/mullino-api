if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

// requiring express
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))

//connecting to MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

// enabling json usage
app.use(express.json())

const bordasRouter = require('./routes/bordas')
app.use('/bordas', bordasRouter)

app.listen(process.env.PORT, () => {
    console.log('Server Running');
})