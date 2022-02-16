import React from 'react';
import '../style/flightSeats.css';

class FlightSeats extends React.Component {
  componentDidMount() {
    this.markBooked();
  }

  componentDidUpdate() {
    this.markBooked();
  }


  handleClick = (ev) => {
    const seatID = ev.target.getAttribute("data-id");
    ev.target.style.background = "green";
    
    this.props.onClick(seatID);
  }

  markBooked = () => {
    const reservationArr = this.props.reservations;

    // console.log(reservationArr)


    if(reservationArr.length) {

      reservationArr.forEach(item => {
        const div = document.querySelector(`#${item.seat}`);
        // div.classList.add("taken");


        // console.log(div)

      })

    }
  }

  render () {
    const { row, column } = this.props.seats;
    const columnName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

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
                    id={`${columnName[index]}${row}`}
                    className="flightSeats__item" 
                    data-id={`${columnName[index]}${row}`}
                    onClick={this.handleClick}
                  >
                    {
                      `${columnName[index]}${row}`
                    }
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