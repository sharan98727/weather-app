import React from "react";

class Fourthrow extends React.Component{
    render(){
        return(
         <div>
             <div>Sunrise</div>
             <div>{this.props.time}</div>
         </div>
        )
    }
}

export default Fourthrow;