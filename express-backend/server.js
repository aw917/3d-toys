// ==============================================
// KEY VARS
// ==============================================
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const MONGO_STRING = process.env.MONGO_STRING;
const methodOverride = require('method-override');
const PORT = 3000 || mongoose.env;
const Favorite = require('./models/favorites.js')

// ==============================================
// MIDDLE-WARE
// ==============================================
app.use(express.urlencoded( {extended : false} ));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
mongoose.connect(MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

// ==============================================
// RESTFUL ROUTES
// ==============================================


// ==============================================
// CONNECTION
// ==============================================
app.listen(PORT, () => {
    console.log('listening');
 });
 