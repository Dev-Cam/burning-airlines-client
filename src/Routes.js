import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import AirlineSearch from './pages/AirlineSearch';
import FlightBooking from './pages/FlightBooking';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={AirlineSearch} />
        <Route exact path='/search/:origin/:destination' component={AirlineSearch} />
        <Route exact path='/flight/:id' component={FlightBooking} />
      </>
    )
  }
}

export default Routes;