import React from "react";
import "./fourthrow.css"

class Fourthrow extends React.Component{
    render(){
        return(
         <div className="fourthrow">
             <div>{this.props.type}</div>
             <div>{this.props.sun}</div>
         </div>
        )
    }
}

export default Fourthrow;