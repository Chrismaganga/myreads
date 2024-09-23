import React, { useState, useEffect } from "react";
import BooksAPI from "../utils/BooksAPI";
import BookShelf from "./Bookshelf";
// import BookShelf from "./BookShelf";

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
    <div className="book-list">
      <BookShelf
        title="Currently Reading"
        books={currentlyReading}
        onUpdateShelf={updateShelf}
      />
      <BookShelf
        title="Want to Read"
        books={wantToRead}
        onUpdateShelf={updateShelf}
      />
      <BookShelf
        title="Read"
        books={read}
        onUpdateShelf={updateShelf}
      />
    </div>
  );
};

export default BookList;


// import React, { useState, useEffect } from "react";
// import BooksAPI from "../utils/BooksAPI";
// import BookShelf from "./Bookshelf";

// const BookList = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     BooksAPI.getAll().then((data) => setBooks(data));
//   }, []);

//   const updateShelf = (book, shelf) => {
//     BooksAPI.update(book, shelf).then(() => {
//       setBooks(books.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
//     });
//   };

//   const currentlyReading = books.filter(
//     (book) => book.shelf === "currentlyReading"
//   );
//   const wantToRead = books.filter((book) => book.shelf === "wantToRead");
//   const read = books.filter((book) => book.shelf === "read");

//   return (
//     <div>
//       <BookShelf
//         title="Currently Reading"
//         books={currentlyReading}
//         onUpdateShelf={updateShelf}
//       />
//       <BookShelf
//         title="Want to Read"
//         books={wantToRead}
//         onUpdateShelf={updateShelf}
//       />
//       <BookShelf title="Read" books={read} onUpdateShelf={updateShelf} />
//     </div>
//   );
// };

// export default BookList;
