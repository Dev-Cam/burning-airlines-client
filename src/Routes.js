import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import AirlineSearch from './pages/AirlineSearch';
import FlightBooking from './pages/FlightBooking';
import Admin from './pages/admin';

class Routes extends React.Component {
  render() {
    return (
      <>
        <Route 
          exact 
          path='/' 
          component={Home} 
        />
        <Route 
          exact 
          path='/search' 
          render={(props) => <AirlineSearch {...props} currentUser={this.props.currentUser} />} 
        />
        <Route 
          exact 
          path='/search/:origin/:destination' 
          render={(props) => <AirlineSearch {...props} currentUser={this.props.currentUser}/>} 
        />
        <Route 
          exact 
          path='/flight/:id' 
          render={(props) => <FlightBooking {...props} currentUser={this.props.currentUser}/>} 
        />
        <Route 
          exact 
          path='/admin' 
          component={Admin} 
        />
      </>
    )
  }
}

export default Routes;