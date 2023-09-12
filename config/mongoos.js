//initialized mongoose -->
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://meanu4280:meanu4280@cluster0.kw3j6su.mongodb.net/Issuetracker?retryWrites=true&w=majority");

const db = mongoose.connection;


db.on('error', console.error.bind(console, "error connecting db"));

db.once('open', () => {
    console.log('successfully connected');
})
