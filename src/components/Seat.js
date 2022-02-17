import React from 'react';

class Seat extends React.Component {
  state = {
    taken: "",
  }

  componentDidMount() {
    this.checkBooked();
  }

  checkBooked = () => {
    const reservationArr = this.props.reservations;
    const seatID = this.props.seatID;


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

  render() {
    const {seatID} = this.props;

    console.log(this.props.reservations)

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