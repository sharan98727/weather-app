import React from "react";

class Graph1 extends React.Component{

    state={
        hourdata:[],
        // date:new Date,
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=22.5726&lon=88.3639&units=metric&
        exclude=minutely&appid=f62e786f62a11ee5d2e5ae43cb6975fa`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                 hourdata:data.hourly,
            },()=>{
                console.log(this.state.hourdata);
            })
        })
    }

    render(){

        // var currenthour = this.state.date.getHours()

        // let graphdata = this.state.hourdata.slice(currenthour,currenthour+9)
        // let graph = 


//         <svg viewBox="0 0 500 100" class="chart">
//   <polyline
//      fill="none"
//      stroke="#0074d9"
//      stroke-width="3"
//      points="    (50-temp)
//        0,120
//        20,60
//        40,80
//        60,20"/>
//<circle cx="20" cy="60" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
// </svg>
        return(
            <div></div>
        )
    }

}
// X50--------------------------------
// |
// |
// |    0   
// |    
// |0O         
export default Graph1;