// import Bookshelf from './Bookshelf';

import Bookshelf from "./BookShelf";

const Home = ({ books, moveBook }) => (
  <div className="home">
    <h2>Book shelf</h2>

<Bookshelf title="Currently Reading" books={books.filter(book => book.shelf === 'currentlyReading')} moveBook={moveBook} />
    <Bookshelf title="Want to Read" books={books.filter(book => book.shelf === 'wantToRead')} moveBook={moveBook} />
    <Bookshelf title="Read" books={books.filter(book => book.shelf === 'read')} moveBook={moveBook} />
  </div>
);

export default Home;
