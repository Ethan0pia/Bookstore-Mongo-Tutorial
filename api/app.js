const express = require('express');
const app = express();
const bodyParcer = require('body-parser');
const mongoose = require('mongoose');
const Genre = require('./models/genre');
const Book = require('./models/book');
mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection;
app.use(bodyParcer.json());
const uri = '/api/v1';
app.get('/', function(req,res){
    res.send(`Please use ${uri} to use.`);
});

app.get(`${uri}/genres`, function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

app.post(`${uri}/genres`, function(req,res){
    var genre = req.body;
    Genre.addGenre(genre ,function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.put(`${uri}/genres/:_id`, function(req,res){
    let id = req.params._id;
    let genre = req.body;
    Genre.updateGenre(id, genre, {} ,function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete(`${uri}/genres/:_id`, function(req,res){
    let id = req.params._id;
    Genre.deleteGenre(id ,function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});





//books------------------------------------------------------------
app.get(`${uri}/books`, function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

app.get(`${uri}/books/:_id`, function(req,res){
    Book.getBookById(req.params._id ,function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.post(`${uri}/books`, function(req,res){
    var book = req.body;
    if(!book.author || !book.title || !book.genre){
        return res.status(404).send('"author","title", and "genre" required!')
    }
    Book.addBook(book ,function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put(`${uri}/books/:_id`, function(req,res){
    let id = req.params._id;
    let book = req.body;
    if(!book.author && !book.title && !book.genre && !book.description && !book.publisher && !book.pages && !book.image_url && !book.buy_url){
        return res.status(404).send('Request must include one or more of: "author", "title", "genre", "description", "publisher", "pages", "image_url", or "buy_url".')
    }
    Book.updateBook(id, book, {} ,function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.delete(`${uri}/books/:_id`, function(req,res){
    let id = req.params._id;
    Book.deleteBook(id ,function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});





const port = 3000;
app.listen(port);
console.log(`Running on port ${port}...`);