import React from 'react';
import '../style/flightInfo.css';

class FlightInfo extends React.Component {
  clickBookingBtn = () => {
    this.props.onSubmit();
  }

  render () {
    const { data, selectedSeat, planeData, reservations } = this.props;

    const plane = planeData?.filter((item) => item.id === data.airplane_id)[0];
    return (
      <>
      {plane === undefined ? "" :
      <section className="flightInfo">
        <div className="flightInfo-textbox">
          <h1>Flight {data.flight_number}</h1>
          <div>
            <p>Airplane type</p>
            <p>
              {planeData.map((item) => item.id === data.airplane_id ? item.name : "")}
            </p>
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
            <p>{`${plane.row * plane.column - reservations.length} / ${plane.row * plane.column}`}</p>
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
          Reserve
        </button>
      </section>
      }
      </>
    )
  }
}

export default FlightInfo;