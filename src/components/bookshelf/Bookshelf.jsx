import Book from '../book/Book';
import './BookShelf.css'; 

const BookShelf = ({ title, books, onUpdateShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {books.length > 0 ? (
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id} className="book-item">
                <Book book={book} onShelfChange={onUpdateShelf} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="empty-shelf-message">No books in this shelf.</p>
        )}
      </div>
    </div>
  );
};

export default BookShelf;