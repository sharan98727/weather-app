import React from "react";
import "./dialydetails.css";

class Daydetails extends React.Component{
   
    render(){
        return(
                 <div className="dialydetails">
                     <div>{this.props.day}</div>
                     <div className="maxmin"><b>{this.props.maxtemp}°</b> {this.props.mintemp}°</div>
                     <img src={this.props.tempimagesrc} 
                     alt=""
                     width="30px"
                     height="20px"
                     />
                     <div>{this.props.temptype}</div>
                 </div>
        )
    }
}

export default Daydetails;