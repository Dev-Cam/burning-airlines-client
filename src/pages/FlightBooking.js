import React from 'react';
import FlightInfo from '../components/FlightInfo';
import FlightSeats from '../components/FlightSeats';

class FlightBooking extends React.Component {
  render () {
    return (
      <>
        <FlightInfo />
        <FlightSeats />
      </>
    )
  }
}

export default FlightBooking;