import React from "react";
import axios from "axios";
import '../style/admin.css';

const FLIGHTS_URL = "http://localhost:3000/api/flights"


class FlightList extends React.Component{

  state = {
    flightData: [],
  }

  componentDidMount(){
    this.fetch();
  }

  fetch = async () => {
    try{
      const res = await axios.get(FLIGHTS_URL)
      console.log(res);
      this.setState({flightData: [...res.data]})
    }
    catch(err){
      console.log("problem", err );
    }
  }

  render(){

    return(
      <>
      {
        this.state.flightData.length === 0 ? <p>No Data</p> :
        <div class="data" id="flight">
        <h2>Current Flights</h2>
        <ul>
          <li>  
            <p><strong>Flight number</strong></p>
            <p><strong>Flight date</strong></p>
            <p><strong>Start-Finish</strong></p>
            <p><strong>Number of seats booked</strong></p>
          </li>
          
            {
              this.state.flightData.map((item) => (
                <li key={item.id}>
                  <p>{item.flight_number}</p>
                  <p>{item.date}</p>
                  <p>{item.origin} - {item.destination}</p>
                  <p>Booked seats / capcity {item.column}</p>
                </li>
              ))
            }
        </ul>
      </div>

      }
      </>
     
    )
  }
}

export default FlightList;