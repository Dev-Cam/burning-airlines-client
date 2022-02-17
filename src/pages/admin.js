import React from "react";
import AirplaneList from "../components/airplaneList";
import FlightList from "../components/flightList";
import '../style/admin.css';


class Admin extends React.Component{

  componentDidMount() {
    console.log('mounted!');

  }
  render(){
    return(
      <div class="container">
        <div class ="inner-container">
          <AirplaneList />,
          <FlightList />
        </div>
      </div>
    )
  }

}

export default Admin;