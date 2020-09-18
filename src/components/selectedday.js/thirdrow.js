import React from "react";
// import { connect } from "react-redux";

class Thirdrow extends React.Component{
    render(){
        return(
            <div style={{display:"flex",flexDirection:"column",
            backgroundColor:"#eff2f5",width:"130px",alignItems:"flex-start",borderRadius:"5px",
            marginTop:"10px",height:"50px",justifyContent:"center"}}>
                <span style={{paddingLeft:"20px"}}>{this.props.name}</span>
                <span style={{paddingLeft:"20px"}}>{this.props.pressure}</span>
            </div>
        )
    }
}



export default Thirdrow;