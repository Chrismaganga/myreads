import React, { useState } from 'react';
import Book from './Book';
import BooksAPI from '../utils/BooksAPI';

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
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={setBooks} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookSearch;

