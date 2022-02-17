import React from "react";
import axios from "axios";
import '../style/admin.css';

const AIRPLANE_URL = "http://localhost:3000/api/airplanes"; 


class AirplaneList extends React.Component{

  state = {
    planeData: [],
  }
  componentDidMount(){
    this.fetch();
  }

  fetch = async () => {
     try{
       const res = await axios.get(AIRPLANE_URL)
       console.log(res);
       this.setState({planeData: [...res.data]})  
     } 
     catch( err ){
      console.log("problem", err );
     }
  }

  render(){

    return(
      <>
      {
        this.state.planeData.length === 0 ? <p>No Data</p> :  
        <div class="data">
        <h2>Current Airplanes</h2>
        <ul>
        <li>
          <p><strong>Plane name</strong></p>
          <p><strong>Capacity</strong></p>
        </li>

          {
            this.state.planeData.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.column * item.row}</p>
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

export default AirplaneList;