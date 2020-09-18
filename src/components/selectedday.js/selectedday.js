import React from "react";
import { connect } from "react-redux";
import Fourthrow from "./fourthrow";
import Graph1 from "./graph1";
import "./selectedday.css";
import Thirdrow from "./thirdrow";

class Selectedday extends React.Component{
    render(){
        return(
            <div className="selectedday">
              <div className="firstrow">
               <h1 className="heading">{this.props.maxtemp}°C</h1>
              <img className="fromtop"
              src={this.props.iconurl}
              alt=""
              width="40px"
              height="40px"
              />
             </div>
              <Graph1/>
            <div className="thirdrow">
                <Thirdrow name="pressure" pressure={this.props.pressure+" hpa"}/>
                <Thirdrow name="humidity" pressure={this.props.humidity+" %"}/>
            </div>
            <div className="fourthrow">
                <Fourthrow sun={this.props.sunrise} type="Sunrise"/>
                <Fourthrow sun={this.props.sunset} type="Sunset"/>
            </div>
            <img src="https://study.com/cimages/videopreview/videopreview-full/5eb4pjw9ds.jpg" 
               alt=""
               />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
    maxtemp:state.maxtemp,
    iconurl:state.selectediconurl,
    sunrise:state.sunrise,
    sunset:state.sunset,
    pressure:state.pressure,
    humidity:state.humidity,
    }
}

export default connect(mapStateToProps)(Selectedday);