import React from 'react';
import axios from 'axios';
import FlightInfo from '../components/FlightInfo';
import FlightSeats from '../components/FlightSeats';
import '../style/flightBooking.css'

class FlightBooking extends React.Component {
  state = {
    info: {},
    seats: {},
    reservations: {},
    selectedSeat: "",
    loading: true,
    error: false
  }

  componentDidMount() {
    const flightID = this.props.match.params.id;

    this.fetchFlightInfo(flightID);
    this.fetchFlightSeats(flightID);
    this.fetchFlightReservation(flightID);
  }

  selectSeat = (id) => {
    console.log(`a user choose seat id: ${id}`);

    this.setState({
      selectedSeat: id
    });
  }

  bookTheSeat = () => {
    console.log(`a user wants to book a seat - ${this.state.selectedSeat}`);

    // fetch post
  }

  fetchFlightInfo = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/flight/${id}`);

      this.setState({
        info: res.data,
        error: false,
        loading: false
      });
    } catch(err) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  // to show the flight seats
  fetchFlightSeats = async (id) => {
    console.log(`need to fetch flight seats. id: ${id}`);

    try {
      const res = await axios.get(`http://localhost:3000/api/flight/${id}/seats`);

      this.setState({
        seats: { ...this.state.seats, row: res.data.row, column: res.data.column },
        error: false,
        loading: false
      });
    } catch(err) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  // get all the reservations in this flight, and show which seats are taken.
  fetchFlightReservation = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/reservations/${id}`);

      this.setState({
        reservations: res.data,
        error: false,
        loading: false
      });
    } catch(err) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render () {
    return (
      <div className="flightBooking">
        <FlightInfo data={this.state.info} selectedSeat={this.state.selectedSeat}/>
        <FlightSeats seats={this.state.seats} onClick={this.selectSeat} />
      </div>
    )
  }
}

export default FlightBooking;