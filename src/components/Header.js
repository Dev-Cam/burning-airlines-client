import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>
          <Link to="/">Burning Airlines</Link>
        </h1>

        <p>Hello, {this.props.currentUser.name}!</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/admin">Admin</Link>
          <a href="http://localhost:3000/login">Logout</a>
        </nav>
      </header>
    )
  }
}

export default Header;