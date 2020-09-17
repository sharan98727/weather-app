import React from "react";
import Fourthrow from "./fourthrow";
import "./selectedday.css";
import Thirdrow from "./thirdrow";

class Selectedday extends React.Component{
    render(){
        return(
            <div className="selectedday">
              <div className="firstrow">
              <h1>29*C</h1>
              <img 
              src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180803287/106756303-sun-vector-icon-isolated-on-transparent-background-sun-logo-concept.jpg"
              alt=""
              width="40px"
              height="40px"
              />
             </div>
               <img src="https://study.com/cimages/videopreview/videopreview-full/5eb4pjw9ds.jpg" 
               alt=""
               
               />
            <div className="thirdrow">
                <Thirdrow/>
                <Thirdrow/>
            </div>
            <div className="fourthrow">
                <Fourthrow time="1022"/>
                <Fourthrow time="1022"/>
            </div>
            <img src="https://study.com/cimages/videopreview/videopreview-full/5eb4pjw9ds.jpg" 
               alt=""
               />
            </div>
        )
    }
}

export default Selectedday;