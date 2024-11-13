import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/booklist/BookList';
import BookSearch from './components/booksearch/BookSearch';
import './App.css';
import NotFound from './components/notfound/NotFound';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch books initially or use your API
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Navbar/> */}
        <BookSearch></BookSearch>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BookList books={books} setBooks={setBooks} />} />
            <Route
              path="/search"
              element={<BookSearch books={books} setBooks={setBooks} searchQuery={searchQuery} />}
            />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};




export default App;
