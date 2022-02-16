import React from 'react';
import { Link } from 'react-router-dom';
import '../style/airlineSearchResults.css';

class AirlineSearchResults extends React.Component {
  render () {
    const { data } = this.props;

    console.log(data)
    return (
      <div className="airlineSearchResults">
        <h2>Flight Search Results: Sydney to Melbourne</h2>
        <ul>
          <li>
            <span>Date</span>
            <span>Flight</span>
            <span>From - To</span>
            <span>Plane</span>
          </li>
          {data.map((item) => (
            <li key={item.id}>
              <span>{item.date}</span>
              <span>
                <Link to={`/flight/${item.id}`}>Flight {item.flight_number}</Link>
              </span>
              <span>{item.origin} - {item.destination}</span>
              <span>need to get airplane name here</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AirlineSearchResults;