import React from "react";

class Graph1 extends React.Component{

    state={
        hourdata:[],
        date:new Date(),
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
        let {hourdata} = this.state;
        var currenthour = this.state.date.getHours();
        let requiredhours = hourdata.slice(currenthour,currenthour+8);
        // console.log(requiredhours);
        let graphdata = requiredhours.map((item)=>{
            // console.log(item.temp)
            return(
                `${new Date(item.dt*1000).getHours()} ${item.temp}`
            )
        })
            var graphxy = graphdata.join(" ");
            console.log(graphxy);
            

            return(
                <svg viewBox="0 0 500 100" class="chart">
                        <polyline
                            fill="none"
                            stroke="#89C3E4"
                            stroke-width="1"
                            points="
                            50,33.73
                            100,32.87
                            150,31.57
                            200,31.06
                            250,30.76
                            300,30.55
                            350,30.3
                            400,30.9
                            "/>
                            <circle cx="100" cy="33.73" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="150" cy="32.87" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="200" cy="31.06" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="250" cy="30.76" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="300" cy="30.55" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="350" cy="30.3" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="400" cy="30.9" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            {/* <circle cx="60" cy="31.57" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/> */}
                        </svg>
                // <svg viewBox="0 0 500 100" className="chart">
                //     <polyline
                //         fill="none"
                //         stroke="#89C3E4"
                //         stroke-width="1"
                //         points= '
                //         0, 120
                //         20,60
                //         40,80
                //         60,20'
                //         />
                //         <circle cx="20" cy="60" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                //         <circle cx="40" cy="80" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                //         <circle cx="60" cy="20" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                //     </svg>
            
        )}
 

      
    }


// X50--------------------------------
// |
// |
// |    0   
// |    
// |0O         
export default Graph1;