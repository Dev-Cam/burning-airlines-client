import React from 'react';
import AirlineSearchForm from '../components/AirlineSearchForm';
import '../style/home.css';
import mainImage from '../assets/main3.png'

class Home extends React.Component {
  searchAirline = (origin, destination) => {
    this.props.history.push(`/search/${origin}/${destination}`);
  }

  render () {
    return (
      <section className="home">
        <div className="home-innerbox">
          <img src={mainImage} alt="" />
          <div className="home-textbox">
            <h2>Burning Airlines</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan eros.
            </p>
            <button>Browse bla</button>
          </div>
        </div>

        <div className="home__form-container">
          <AirlineSearchForm onSubmit={this.searchAirline} />
        </div>
      </section>
    )
  }
}

export default Home;