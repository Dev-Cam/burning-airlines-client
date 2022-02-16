import React from 'react';
import axios from 'axios';

class Seat extends React.Component {
  state = {
    taken: "",
    reservations: [],
  }

  componentDidMount() {
    this.checkBooked();
  }

  checkBooked = () => {
    const reservationArr = this.props.reservations;
    const seatID = this.props.seatID


    if(reservationArr?.length) {
      reservationArr.forEach((item) => {
        if(item.seat === seatID) {
          this.setState({
            taken: item.user_id
          }
        )}
      })
    }
  }

  clickSeat = () => {
    this.props.onClick(this.props.seatID);
  }

  // fetchUsers = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/api/users`);

  //     this.setState({
  //       user: res.data,
  //       error: false,
  //       loading: false
  //     });
  //   } catch(err) {
  //     this.setState({
  //       loading: false,
  //       error: true
  //     })
  //   }
  // }

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


  render() {
    const {seatID} = this.props;

    return (
      <div 
        className="flightSeats__item"
        onClick={this.clickSeat}
        id={this.state.taken !== "" ? "taken" : this.props.selected ? "selected" : ""}
      >
        {this.state.taken !== "" ? `[${this.state.taken}]` : seatID}
      </div>
    )
  }
}

export default Seat;