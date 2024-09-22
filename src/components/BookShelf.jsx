import Book from './Book';

const Bookshelf = ({ title, books, moveBook }) => (
  <div className="bookshelf">
    <h3>{title}</h3>
    <div className="bookshelf-books">
      {books.map(book => (
        <Book key={book.id} book={book} moveBook={moveBook} />
      ))}
    </div>
  </div>
);
export default Bookshelf;
