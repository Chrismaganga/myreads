import React, { useState, useEffect } from 'react';
import Book from './Book';
import booksData from '../data'; // Import your book data

const Search = ({ moveBook }) => {
  const [query, setQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (query === '') {
      setFilteredBooks([]); // No search results when query is empty
    } else {
      const results = booksData.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        (book.authors && book.authors.some(author => author.toLowerCase().includes(query.toLowerCase())))
      );
      setFilteredBooks(results);
    }
  }, [query]);

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search for books"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="search-results">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <Book key={book.id} book={book} moveBook={moveBook} />
          ))
        ) : (
          query && <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
