import React, { useState } from 'react';
import BooksAPI from '../../utils/BooksAPI';
import './BookSearch.css';
import Book from '../book/Book';

const BookSearch = ({ books, setBooks }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      BooksAPI.search(value).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          setSearchResults(results);
          // Update the state of books in the main app
          setBooks((prevBooks) => {
            const updatedBooks = prevBooks.map((b) => {
              const match = results.find((result) => result.id === b.id);
              return match ? { ...b, ...match } : b;
            });
            const newBooks = results.filter((result) => !updatedBooks.some((b) => b.id === result.id));
            return [...updatedBooks, ...newBooks];
          });
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books-container">
      <div className="search-books-bar">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </div>

      <div className="search-books-results">
        <div className="books-grid-container">
          <ol className="books-grid">
            {searchResults.map((book) => (
              <li key={book.id}>
                <Book book={book} onShelfChange={setBooks} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookSearch;
