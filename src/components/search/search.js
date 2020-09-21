import React from "react";
import "./search.css";
import {places} from "../../places";
import { connect } from "react-redux";

class Search extends React.Component{

    state={
        value:'',
        lat:'',
        lon:'',
        // citylist:["hyderabad","new Delhi","bengaluru","kolkata","chennai","pune","chandigarh","lucknow",
        // "mumbai","jaipur","patna","ahmedabad"]  ,
        // iconlist:{

        //     "hyderabad":'',
        //     "new Delhi":'',
        //     "bengaluru":'',
        //     "kolkata":"",
        //     "chennai":"",
        //     "pune":"",
        //     "chandigarh":"",
        //     "lucknow":"",
        //     "mumbai":"",
        //     "jaipur":"",
        //     "patna":"",
        //     "ahmedabad":""

        // }
    }
   handlechange = e =>{
       this.setState({
           value:e.target.value,
       }      
       )

   }

   handlesubmit  = e =>{
       const coordinates = places.filter(place =>place.name.startsWith(this.state.value));
       let latitude  = coordinates[0].coord.lat;
       let longitude = coordinates[0].coord.lon;
       this.props.dispatch({
           type:"LATITUDE&LONGITUDE",
           payload:{
               lat:latitude,
               lon:longitude
           }
       })

       this.setState({
        value:''
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
        
        if(this.state.value!=='' )
        {
            
        var inputsuggestions = suggestions.map(place => {
            return(
                <div className="searchsuggestions" onClick={()=>this.handleclick(place.name)}>
                  
                    <div className="suggestiontext">{place.name}</div>
                    {/* <img src={'https://abc.com/icons' + this.state.temparatures[place.name]}></img> */}
                    <img className="weathericon" src={`http://openweathermap.org/img/wn/${place.icon}@2x.png`} alt="" />
                    <span style={{display:"flex",alignItems:"center"}}>{place.description}</span>
                </div>
            )
        })
    }
    
        return(
        <div className="searchbar">
            <form>
                <input type="text"  value={this.state.value} placeholder="enter your city"
                onChange={this.handlechange} style={{width:"710px",height:"40px",borderRadius:"7px",
                marginBottom:"10px",outlineWidth:"none",border:"none", boxShadow:" 0px 5px 20px -8px rgba(0, 0,0,0.75)",
            margin:"0px"}}
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