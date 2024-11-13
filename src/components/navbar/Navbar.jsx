import React from 'react';
import { Link } from 'react-router-dom';
import BookSearch from '../booksearch/BookSearch';
import './Navbar.css';

const Navbar = ({ books, setBooks }) => {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        <Link to="/">MyReads</Link>
      </div> */}
      <div className="search-input">
        <BookSearch books={books} setBooks={setBooks} />
      </div>
    </nav>
  );
};

export default Navbar;
