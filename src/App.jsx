import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

import BooksAPI from './utils/BooksAPI';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<BookList books={books} setBooks={setBooks} />} />
          <Route path="/search" element={<BookSearch books={books} setBooks={setBooks} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
