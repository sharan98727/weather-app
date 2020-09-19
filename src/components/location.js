import React from "react";
import { connect } from "react-redux";


class Location extends React.Component{

    locatePosition = () => {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
           const success =(pos) => {
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            let lat = crd.latitude;
            let lon = crd.longitude;
            this.props.dispatch({
                type:"LATITUDE&LONGITUDE",
                payload:{
                    lat:lat,
                    lon:lon,
                }
            })

          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error, options);
    }

    render(){
        return(
          <button style={{display:"flex",visibility:"hidden"}} onClick={this.locatePosition()}>.</button>
        )
    }
}

const mapStateToProps = state =>{
    return{

    }
}

export default connect(mapStateToProps)(Location);















// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);