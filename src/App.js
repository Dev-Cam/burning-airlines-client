import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import './style/reset.css';
import './style/global.css';

class App extends React.Component {
  state = {
    currentUser: {}
  }

  componentDidMount() {
    // when this component is mount, we need to get a current user info here
  }

  render () {
    return (
      <div className="App">
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Routes currentUser={this.state.currentUser} />
        <Footer />
      </Router>
    </div>
    )
  }
}


export default App;
