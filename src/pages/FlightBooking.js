import React from 'react';
import axios from 'axios';
import FlightInfo from '../components/FlightInfo';
import FlightSeats from '../components/FlightSeats';
import Error from '../components/Error';
import '../style/flightBooking.css'

class FlightBooking extends React.Component {
  state = {
    info: {},
    seats: {},
    reservations: [],
    selectedSeat: "",
    planeData: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    const flightID = this.props.match.params.id;

    this.fetchFlightInfo(flightID);
    this.fetchFlightSeats(flightID);
    this.fetchFlightReservation(flightID);
    this.fetchAllAirplanes();
  }

  selectSeat = (id) => {
    this.setState({
      selectedSeat: id
    });
  }

  bookTheSeat = async () => {
    const flightId = this.state.info.id;
    const seat = this.state.selectedSeat;
    const user = this.props.currentUser.id;

    // check if a user actually choose a seat
    if(seat === "") {
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/api/reservation/${flightId}/${seat}/${user}`);

      this.setState({
        error: false,
        loading: false
      });

      // redirect to previous page
      this.props.history.goBack();

    } catch(err) {
      this.setState({
        loading: false,
        error: true
      })
    }
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

  fetchAllAirplanes = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/airplanes`);

      this.setState({
        planeData: res.data,
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
    if(this.state.error) {
      return <Error />
    };

    return (
      <div className="flightBooking">
        <FlightInfo 
          data={this.state.info} 
          selectedSeat={this.state.selectedSeat}
          planeData={this.state.planeData}
          onSubmit={this.bookTheSeat}
        />
        <FlightSeats 
          seats={this.state.seats} 
          selectedSeat={this.state.selectedSeat} 
          reservations={this.state.reservations}
          onClick={this.selectSeat} 
        />
      </div>
    )
  }
}

export default FlightBooking;