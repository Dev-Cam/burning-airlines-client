import { HashRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import './style/reset.css';
import './style/global.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />

        <h1>We are the greatest group</h1>
        <h2>To ever walk the earth...</h2>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
