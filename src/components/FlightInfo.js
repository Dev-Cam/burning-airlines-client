import React from 'react';
import '../style/flightInfo.css';

class FlightInfo extends React.Component {
  clickBookingBtn = () => {
    this.props.bookTheFlight();
  }

  render () {
    const { data, selectedSeat } = this.props;

    return (
      <section className="flightInfo">
        <div className="flightInfo-textbox">
          <h1>Flight {data.id}</h1>
          <div>
            <p>Airplane type</p>
            <p>{data.flight_number}</p>
          </div>
          <div>
            <p>Date</p>
            <p>{data.date}</p>
          </div>
          <div>
            <p>Trip</p>
            <p>{data.origin} to {data.destination}</p>
          </div>
          <div>
            <p>Available Seats</p>
            <p>34 / 80</p>
          </div>
        </div>
        <div className="flightInfo__selectedSeat">
          <p>Selected Seat</p>
          <p>{selectedSeat || "Select your seat"}</p>
        </div>
        <button 
          className="flightInfo__bookingBtn"
          onClick={this.clickBookingBtn}
        >
          Select
        </button>
      </section>
    )
  }
}

export default FlightInfo;