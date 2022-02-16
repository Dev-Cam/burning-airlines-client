import React from 'react';
import axios from 'axios';
import AirlineSearchForm from '../components/AirlineSearchForm';
import AirlineSearchResults from '../components/AirlineSearchResults';

class AirlineSearch extends React.Component {
  state = {
    data: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    const currentOrigin = this.props.match.params.origin;
    const currentDestination = this.props.match.params.destination;

    if(currentOrigin && currentDestination) {
      // if there was search term, show the search result
      this.fetchSearchResults(currentOrigin, currentDestination);
    } else {
      // in search page, show every flight for default
      this.fetchAllFlights();
    }
  }

  componentDidUpdate(prevProps) {
    const prevOrigin = prevProps.match.params.origin;
    const prevDestination = prevProps.match.params.destination;

    const currentOrigin = this.props.match.params.origin;
    const currentDestination = this.props.match.params.destination;

    // when prev and current params are not matched, fetch current search result
    if(prevOrigin !== currentOrigin || prevDestination !== currentDestination) {
      this.fetchSearchResults(currentOrigin, currentDestination);
    }
  }

  searchAirline = (origin, destination) => {
    this.props.history.push(`/search/${origin}/${destination}`);
  }

  fetchSearchResults = async (origin, destination) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/flights/search/${origin}/${destination}`);

      this.setState({
        data: res.data,
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

  fetchAllFlights = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/flights`);

      this.setState({
        data: res.data,
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

  render () {
    if(this.state.error) {
      return <p>ERROR!</p>
    }

    return (
      <>
      {
        this.state.loading 
        ?
        <p>Loading...</p>
        :
        <div>
          <AirlineSearchForm onSubmit={this.searchAirline} params={this.props.match.params} />
          <AirlineSearchResults data={this.state.data}/>
        </div>
      }
      </>
    )
  }
}

export default AirlineSearch;