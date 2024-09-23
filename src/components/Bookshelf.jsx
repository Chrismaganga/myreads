// import Book from './Book';

// const BookShelf = ({ books, title, onUpdateShelf }) => {
//   return (
//     <div className="bookshelf">
//       <h2 className="bookshelf-title">{title}</h2>
//       <div className="bookshelf-books">
//         <ol className="books-grid">
//           {books.map(book => (
//             <li key={book.id}>
//               <Book book={book} onUpdateShelf={onUpdateShelf} />
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default BookShelf;
// src/components/BookShelf.jsx
import React from 'react';
import Book from './Book';

const BookShelf = ({ title, books, onUpdateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={onUpdateShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;

