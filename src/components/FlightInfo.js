import React from 'react';
import '../style/flightInfo.css';

class FlightInfo extends React.Component {
  render () {
    return (
      <section className="flightInfo">
        <div className="flightInfo-textbox">
          <h1>Flight 09</h1>
          <div>
            <p>Airplane type</p>
            <p>707</p>
          </div>
          <div>
            <p>Date</p>
            <p>11/02/202</p>
          </div>
          <div>
            <p>Airplane type</p>
            <p>707</p>
          </div>
          <div>
            <p>Trip</p>
            <p>Sydney to Melbourne</p>
          </div>
          <div>
            <p>Available Seats</p>
            <p>34 / 80</p>
          </div>
        </div>
        <div className="flightInfo__selectedSeat">
          <p>Selected Seat</p>
          <p>{this.props.selectedSeat || "Select your seat"}</p>
        </div>
      </section>
    )
  }
}

export default FlightInfo;