import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>MyReads</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
  </header>
);

export default Header;
