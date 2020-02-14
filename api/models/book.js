const mongoose = require('mongoose');

//book schema
let bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true        
    },
    description:{
        type: String,      
    },
    author:{
        type: String, 
        required: true      
    },
    publisher:{
        type: String,      
    },
    pages:{
        type: String,      
    },
    image_url:{
        type: String,      
    },
    buy_url:{
        type: String,      
    },
    create_date:{
        type: Date,
        default:Date.now
    }
});

let Book = mongoose.exports = mongoose.model('Book', bookSchema);

//Get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

//Get book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

//Add book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

//Update Book
module.exports.updateBook = function(id, book, options, callback){
    let query = {_id:id};
    let update = {};
    //Create update object using all fields available
    if(book.title) update["title"] = book.title;
    if(book.genre) update["genre"] = book.genre;
    if(book.description) update["description"] = book.description;
    if(book.author) update["author"] = book.author;
    if(book.publisher) update["publisher"] = book.publisher;
    if(book.image_url) update["image_url"] = book.image_url;
    if(book.pages) update["pages"] = book.pages;
    if(book.buy_url) update["buy_url"] = book.buy_url;
    Book.findOneAndUpdate(query, update, options, callback);
}


//delete Book
module.exports.deleteBook = function(id, callback){
    let query = {_id:id};
    Book.remove(query, callback);
}