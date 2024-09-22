const Book = ({ book, moveBook }) => {
    const handleChange = (e) => {
      moveBook(book.id, e.target.value);
    };
  
    return (
      <div className="book">
        <h3>{book.title}</h3>
        <p>{book.authors.join(", ")}</p>
        <select value={book.shelf} onChange={handleChange}>
          <option value="none">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  };
  
  export default Book;
  