import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* pages here */}
        <Route exact path='/' />
        <Route exact path='/' />
        <Route exact path='/' />
      </Router>
    )
  }
}

export default Routes;