import React from 'react';
import '../style/airlineSearchForm.css';

class AirlineSearchForm extends React.Component {
  render () {
    return (
      <form className="airlineSearchForm">
        <input type='text' placeholder='From' />
        <input type='text' placeholder='to' />
        <button>Search</button>
      </form>
    )
  }
}

export default AirlineSearchForm;