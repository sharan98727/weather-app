import React from "react";
import "./dialydetails.css";

class Daydetails extends React.Component{
    render(){
        return(
                 <div className="dialydetails">
                     <div>{this.props.day}</div>
                     <div>{this.props.maxtemp} {this.props.mintemp}</div>
                     <img src={this.props.tempimagesrc} 
                     alt=""
                     width="20px"
                     height="20px"
                     />
                     <div>{this.props.temptype}</div>
                 </div>
        )
    }
}

export default Daydetails;