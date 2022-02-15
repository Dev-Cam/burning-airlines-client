import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>Burning Airlines</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
    )
  }
}

export default Header;