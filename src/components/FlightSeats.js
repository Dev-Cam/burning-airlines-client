import React from 'react';
import '../style/flightSeats.css';

class FlightSeats extends React.Component {

  handleClick = (ev) => {
    const seatID = ev.target.getAttribute("data-id");
    ev.target.style.background = "green";

    this.props.onClick(seatID);
  }

  render () {
    const { row, column } = this.props.seats;

    return (
      <div className="flightSeats">
        <div className="flightSeats-innerbox">
        {
          [...Array(row)].map((e, row) => {
            return <div className="flightSeats__row" key={row}>

              {
                [...Array(column)].map((e, index) => {
                  return <div 
                    key={index}
                    className="flightSeats__item" 
                    data-id={`${row}-${index}`}
                    onClick={this.handleClick}
                  >

                  </div>
                })
              }

            </div>
          })
        }
        </div>
      </div>
    )
  }
}

export default FlightSeats;