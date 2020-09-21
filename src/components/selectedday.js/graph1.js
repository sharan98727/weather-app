import React from "react";
import { connect } from "react-redux";

class Graph1 extends React.Component{

    state={
        hourdata:[],
        date:new Date(),
    }

    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&units=metric&
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

    componentDidUpdate(prevprops){
        console.log(this.props.latitude);
        console.log(prevprops.latitude)
        if(this.props.latitude!==prevprops.latitude)
        {
    
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&units=metric&
      exclude=minutely&appid=f62e786f62a11ee5d2e5ae43cb6975fa`).then(res => res.json())
            .then(data => this.setState({
                hourdata: data.hourly,
            }, () => {
                console.log(this.state.hourdata);
            }))
    
        }
        }

    render(){
        let {hourdata} = this.state;
        var currenthour = this.state.date.getHours();
        console.log(currenthour);
        let requiredhours = hourdata.slice(1,8);
        // console.log(requiredhours);
        let graphdata = requiredhours.map((item, index)=>{
            // console.log(item.temp)
            return(
             
                `${index*80},${item.temp}`
                
                
            )
        });
        
        let circle = requiredhours.map((item, index)=>{
            // console.log(item.temp)
            return(
                
                 <circle cx={index*80} cy={item.temp} r="2" stroke="#89C3E4" fill="white" stroke-width="1" />
                
            )
        });
        
            
       

        let timeStampFooter = requiredhours.map((item, index)=>{
            // console.log(item.temp)
            return(
                <div>
                    {new Date(item.dt *1000).getHours()}

                </div>
            )
        });

            var graphxy = graphdata.join(" ");
            console.log('======>', graphxy);
            

            return(
            <div>
                <svg viewBox="0 0 500 100" class="chart">
                        <polyline
                            fill="none"
                            stroke="#89C3E4"
                            stroke-width="1"
                            points={graphxy}/>
                            {circle}
                            {/* <circle cx="100" cy="33.73" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="150" cy="32.87" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="200" cy="31.06" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="250" cy="30.76" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="300" cy="30.55" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="350" cy="30.3" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/>
                            <circle cx="400" cy="30.9" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/> */}
                            {/* <circle cx="60" cy="31.57" r="2" stroke="#89C3E4" fill="white" stroke-width="1"/> */}
                        </svg>
                        <div style={{display:"flex",justifyContent:"space-between"}}>{timeStampFooter}</div>
                        </div>
                       
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

const mapStateToProps = state =>{
    console.log('=========>',state.lat);
    return{
        latitude:state.lat,
        longitude:state.lon,
    }
}
         
export default connect(mapStateToProps)(Graph1);