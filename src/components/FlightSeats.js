import React from 'react';
import '../style/flightSeats.css';

import Seat from './Seat';

class FlightSeats extends React.Component {
  state = {
    selected: ""
  }

  handleClick = (seatID) => {
    this.setState({
      selected: seatID
    })

    this.props.onClick(seatID);
  }



  render () {
    const { row, column } = this.props.seats;
    const columnName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    return (
      <div className="flightSeats">
        {this.props.reservations.length === 0 ? <p>Loading....</p>: 

        <div className="flightSeats-innerbox">
        {
          [...Array(row)].map((e, row) => {
            return <div className="flightSeats__row" key={row}>

              {
                [...Array(column)].map((e, index) => {
                  return <Seat 
                    key={index}
                    seatID={`${columnName[index]}${row}`}
                    reservations={this.props.reservations}
                    onClick={this.handleClick}
                    selected={this.state.selected === `${columnName[index]}${row}`? true : false}
                  />
                })
              }

            </div>
          })
        }
        </div>


      }
      </div>
    )
  }
}

export default FlightSeats;