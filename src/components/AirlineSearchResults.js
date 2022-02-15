import React from 'react';
import { Link } from 'react-router-dom';
import '../style/airlineSearchResults.css';

class AirlineSearchResults extends React.Component {
  render () {
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

          {/* will iterate with .map here */}
          <li>
            <span>3/1/13</span>
            <span>
              <Link to={`/flight/:id`}>23</Link>
            </span>
            <span>Sydney - Seoul</span>
            <span>757</span>
          </li>
          <li>
            <span>3/1/13</span>
            <span>
              <Link to={`/flight/:id`}>23</Link>
            </span>
            <span>Sydney - Seoul</span>
            <span>757</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default AirlineSearchResults;