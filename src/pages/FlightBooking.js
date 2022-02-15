import React from 'react';
import FlightInfo from '../components/FlightInfo';
import FlightSeats from '../components/FlightSeats';
import '../style/flightBooking.css'

class FlightBooking extends React.Component {
  state = {
    info: {},
    seats: {},
    selectedSeat: "",
    loading: true,
    error: false
  }

  componentDidMount() {
    const flightID = this.props.match.params.id;

    this.fetchFlightInfo(flightID);
    this.fetchFlightSeats(flightID);
  }

  selectSeat = (id) => {
    console.log(`a user choose seat id: ${id}`);

    this.setState({
      selectedSeat: id
    });
  }

  fetchFlightInfo = async (id) => {
    console.log(`need to fetch flight info here. id: ${id}`);
  }

  fetchFlightSeats = async (id) => {
    console.log(`need to fetch flight seats. id: ${id}`);
    // it will be like { row: 4, column: 8 }
  }

  fetchFlightReservation = async (id) => {
    // fetch all seats from reservation which is flight_id === id
  }

  render () {
    return (
      <div className="flightBooking">
        <FlightInfo selectedSeat={this.state.selectedSeat}/>
        <FlightSeats onClick={this.selectSeat} />
      </div>
    )
  }
}

export default FlightBooking;