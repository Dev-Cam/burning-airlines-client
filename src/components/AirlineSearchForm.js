import React from 'react';
import '../style/airlineSearchForm.css';

class AirlineSearchForm extends React.Component {
  state = {
    origin: "",
    destination: "",
  }

  componentDidMount() {
    if(this.props?.params) {
      this.setState({
        origin: this.props.params.origin,
        destination: this.props.params.destination
      })
    }
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
    
    this.props.onSubmit(this.state.origin, this.state.destination);
  }

  render () {
    return (
      <form className="airlineSearchForm" onSubmit={this.handleSubmit}>
        <div>
          <label>From</label>
          <input 
            type='text' 
            required 
            placeholder='Sydney' 
            value={this.state.origin || ""}
            onChange={this.handleChangeOrigin} 
          />
        </div>
        <div>
          <label>To</label>
          <input 
            type='text' 
            required 
            placeholder='Melbourne' 
            value={this.state.destination || ""}
            onChange={this.handleChangeDestination} 
          />
        </div>
        <button>Search</button>
      </form>
    )
  }
}

export default AirlineSearchForm;