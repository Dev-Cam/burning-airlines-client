import React from 'react';
import '../style/airlineSearchForm.css';

class AirlineSearchForm extends React.Component {
  state = {
    origin: "",
    destination: "",
  }

  handleChangeOrigin = (ev) => {
    this.setState({
      origin: ev.target.value
    });
  }

  handleChangeDestination = (ev) => {
    this.setState({
      destination: ev.target.value
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    
    this.props.onSubmit(this.state.origin, this.state.destination)
  }

  render () {
    return (
      <form className="airlineSearchForm" onSubmit={this.handleSubmit}>
        <input type='text' placeholder='From' onChange={this.handleChangeOrigin} />
        <input type='text' placeholder='to' onChange={this.handleChangeDestination} />
        <button>Search</button>
      </form>
    )
  }
}

export default AirlineSearchForm;