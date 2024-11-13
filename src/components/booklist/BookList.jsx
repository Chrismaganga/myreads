import React, { useState, useEffect } from "react";
import BooksAPI from "../../utils/BooksAPI";


import "./BookList.css"; 
import BookShelf from "../bookshelf/Bookshelf";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((data) => setBooks(data));
  }, []);

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      setBooks(books.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
    });
  };

  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div className="book-list container">
      <h1 className="book-list-title">My Book Collection</h1>
      <div className="book-shelves">
        <BookShelf
          title="Currently Reading"
          books={currentlyReading}
          onUpdateShelf={updateShelf}
          className="book-shelf currently-reading"
        />
        <BookShelf
          title="Want to Read"
           books={wantToRead}
          onUpdateShelf={updateShelf}
           className="book-shelf want-to-read"
        />
       <BookShelf
          title="Read"
          books={read}
          onUpdateShelf={updateShelf}
          className="book-shelf read"
        />
      </div>
    </div>
  );
};

export default BookList;
