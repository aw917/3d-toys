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

// Index
app.get('/favorites', (req, res) => {
    // don't filter the information
    Favorite.find({}, (err, allFavorites) => {
        if(!err) {
            res.send({
                favorites: allFavorites
            })
        } else {
            res.send(err)
        }
    })
})

// New
app.get('/favorites/new', (req, res) => {
    res.render('New');
})

// Delete
app.delete('/favorites/:id', (req, res) => {
    Favorite.findByIdAndDelete(req.params.id, (err, _) => {
        if(!err) {
            res.redirect('/favorites')
        } else {
            res.send(err)
        }
    })
})

// Update
app.put('/favorites/:id', (req, res) => {
    Favorite.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFavorite) => {
        if(!err) {
            res.redirect('/favorites');
        } else {
            res.send(err);
        }
    })
})

// Create
app.post('/favorites', (req, res) => {
    Favorite.create(req.body, (err, createdFavorite)=> {
        if (!err) {
            res.redirect('/favorites')
        } else {
            res.send(err);
        }
    })
})

// Edit
app.get('/favorites/:id/edit', (req, res) => {
    Favorite.findById(req.params.id, (err, foundFavorite) => {
        if(!err) {
            res.render({
                favorites: foundFavorite
            })
        } else {
            res.send(err)
        }
    })
})

// Show
app.get('/favorites/:id', (req, res) => {
    Favorite.findById(req.params.id, (err, foundFavorite) => {
        if(!err) {
            res.render({
                favorites: foundFavorite
            })
        } else {
            res.send(err)
        }
    })
})

// ==============================================
// CONNECTION
// ==============================================
app.listen(PORT, () => {
    console.log('listening');
 });
 