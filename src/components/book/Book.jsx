import React from 'react';
import './Book.css';
import { ReactComponent as ArrowBack } from '../icons/arrow-back.svg';
import { ReactComponent as ArrowDown } from '../icons/arrow-down.svg';
import { ReactComponent as Add } from '../icons/add.svg';

const Book = ({ book, onShelfChange }) => {
  const handleChange = (event) => {
    onShelfChange(book, event.target.value);
  };

  const moveUp = () => {
    const newShelf = book.shelf === 'wantToRead' ? 'currentlyReading' : book.shelf;
    onShelfChange(book, newShelf);
  };

  const moveDown = () => {
    const newShelf = book.shelf === 'currentlyReading' ? 'wantToRead' : book.shelf;
    onShelfChange(book, newShelf);
  };

  return (
    <div className="book">
      <div
        className="book-top"
        style={{
          backgroundImage: `url(${book.imageLinks?.thumbnail || ''})`,
        }}
      >
        <div className="book-shelf-changer">
          <select value={book.shelf || 'none'} onChange={handleChange}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors?.join(', ')}</div>

      <div className="book-actions">
        <button onClick={moveUp} className="action-btn">
          <ArrowBack className="icon" /> {/* Use ArrowBack as React component */} 
        </button>
        <button onClick={moveDown} className="action-btn">
          <ArrowDown className="icon" /> {/* Use ArrowDown as React component */}
        </button>
        <button onClick={moveDown} className="action-btn">
          <Add className="icon" /> {/* Use Add as React component */}
        </button>
      </div>
    </div>
  );
};

export default Book;
