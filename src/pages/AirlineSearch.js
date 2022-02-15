import React from 'react';
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
      this.fetchSearchResults(currentOrigin, currentDestination);
    } else {
      this.setState({
        loading: false
      })
    }
  }

  componentDidUpdate(prevProps) {
    const prevOrigin = prevProps.match.params.origin;
    const prevDestination = prevProps.match.params.destination;

    const currentOrigin = this.props.match.params.origin;
    const currentDestination = this.props.match.params.destination;

    if(prevOrigin !== currentOrigin || prevDestination !== currentDestination) {
      this.fetchSearchResults(currentOrigin, currentDestination);
    }
  }

  searchAirline = (origin, destination) => {
    this.props.history.push(`/search/${origin}/${destination}`);
  }

  fetchSearchResults = async (origin, destination) => {
    // fetch
    console.log(`need to make a function. From ${origin} to ${destination}`);

    this.setState({
      // data: 
      loading: false,
      error: false,
    })
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
          <AirlineSearchResults />
        </div>
      }
      </>
    )
  }
}

export default AirlineSearch;