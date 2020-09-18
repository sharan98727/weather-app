import React from "react";
import { connect } from "react-redux";
import Daydetails from "./daydetails";
import "./dialyweather.css"
// import { places } from '../../places';

class Dialyweather extends React.Component{

    state={

    weekDays : ['Sun', 'Mon', 'Tue', 'Wed', 
    'Thu', 'Fri', 'Sat'],
    dialydata:[],


    }

   componentDidMount() {
  
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&units=metric&
  exclude=minutely&appid=f62e786f62a11ee5d2e5ae43cb6975fa`)
    .then(res => res.json())
    .then(data => this.setState({
      dialydata: data.daily,
    }, () => {
      console.log(this.state.dialydata);
    }))
}

shouldComponentUpdate(prevprops){
    console.log(prevprops.latitude);
     return true;
}
    componentDidUpdate(prevprops){
    console.log(this.props.latitude);
    console.log(prevprops.latitude)
    if(this.props.latitude!==prevprops.latitude)
    {

        const { latitude, longitude } = this.props;
        console.log('====>' + JSON.stringify(this.props));
        const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude.latitude + '&lon=' + longitude.longitude  + '&units=metric&exclude=minutely&appid=f62e786f62a11ee5d2e5ae43cb6975fa';
        console.log('=====>' +  url);
        fetch(url).then(res => res.json())
        .then(data => this.setState({
            dialydata: data.daily,
        }, () => {
            console.log(this.state.dialydata);
        }))

    }
    }

handleclick = (item,e) =>{
      this.props.dispatch({
          type:"MAX_TEMP",
          payload:{
              temperature:item.item.temp.max,
              picture:`http://openweathermap.org/img/wn/${item.item.weather[0].icon}@2x.png`,
              humidity:item.item.humidity,
              pressure:item.item.pressure,
              sunrise:item.item.sunrise,
              sunset:item.item.sunset,
          }
      })
      console.log(item.item);
 }



    render(){

        let items = this.state.dialydata.map((item)=>{
            return(
                <div onClick={(e)=>this.handleclick({item},e)} className="spread">
                    <Daydetails 
                    day={this.state.weekDays[new Date(item.dt*1000).getDay()]}
                    maxtemp={Math.floor(item.temp.max)}
                    mintemp={Math.floor(item.temp.min)}
                    tempimagesrc={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    temptype={item.weather[0].main}
                    />

                </div>
            )
        })

        return(
        <div className="dialyweather">{items}</div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state.lat);
    console.log(state.lon);
  return{
      latitude:state.lat,
      longitude:state.lon
  }
}


export default connect(mapStateToProps)(Dialyweather);


