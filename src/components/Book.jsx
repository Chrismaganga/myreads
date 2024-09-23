
const Book = ({ book, onShelfChange }) => {
  const handleChange = (event) => {
    onShelfChange(book, event.target.value);
  };

  return (
    <div className="book">
      <div
        className="book-top"
        style={{ backgroundImage: `url(${book.imageLinks?.thumbnail || ""})` }}
      >
        <div className="book-shelf-changer">
          <select value={book.shelf || "none"} onChange={handleChange}>
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
    </div>
  );
};

export default Book;
