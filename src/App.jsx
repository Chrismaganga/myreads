import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Search from './components/Search';
import booksData from './data';
import { useState } from 'react';

const App = () => {
  const [books, setBooks] = useState(booksData);

  const moveBook = (bookId, shelf) => {
    const updatedBooks = books.map(book =>
      book.id === bookId ? { ...book, shelf } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home moveBook={moveBook} books={books} />} />
        <Route path="/search" element={<Search moveBook={moveBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
