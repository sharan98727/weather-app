import React from "react";
import "./search.css";
import {places} from "../../places";
import { connect } from "react-redux";

class Search extends React.Component{

    state={
        value:''
    }
   handlechange = e =>{
       this.setState({
           value:e.target.value,
       })       
   }

   handlesubmit  = e =>{
       const coordinates = places.filter(place =>place.name.startsWith(this.state.value));
       let latitude  = coordinates[0].coord.lat;
       let longitude = coordinates[0].coord.lon;
       this.props.dispatch({
           type:"LATITUDE&LONGITUDE",
           payload:{
               lat:{latitude},
               lon:{longitude}
           }
       })
   }

   handleclick = place =>{

       this.setState({
           value: place,
       },()=>{
           console.log(this.state.value);
       })
       this.handlesubmit()
       
   }

    render(){
        const suggestions = places.filter(place =>place.name.startsWith(this.state.value));
        console.log(suggestions);
        
        if(this.state.value!=='')
        {
        var inputsuggestions = suggestions.map(place => {
            return(
                <div className="searchsuggestions" onClick={()=>this.handleclick(place.name)}>
                  
                    <div >{place.name}</div>
                    <span></span>
                  
                </div>
            )
        })
    }
    
        return(
        <div className="searchbar">
            <form>
                <input type="text"  value={this.state.value} placeholder="enter your city"
                onChange={this.handlechange} style={{width:"710px",height:"40px",borderRadius:"7px",
                marginBottom:"10px",outlineWidth:"none",border:"none", boxShadow:" 0px 5px 20px -8px rgba(0, 0,0,0.75)"}}
                />
            </form>
            {inputsuggestions}
            </div>
        )
    }

}

const mapStateToProps = state =>{
    // return{

    // }
}

export default connect(mapStateToProps)(Search);