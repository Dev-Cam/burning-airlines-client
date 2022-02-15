import React from 'react';
import AirlineSearchForm from '../components/AirlineSearchForm';
import AirlineSearchResults from '../components/AirlineSearchResults';

class AirlineSearch extends React.Component {
  render () {
    return (
      <>
        <AirlineSearchForm />
        <AirlineSearchResults />
      </>
    )
  }
}

export default AirlineSearch;