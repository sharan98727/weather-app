import React from 'react';
import './App.css';
import Dialyweather from './components/dialyweather/dialyweather';
import Location from './components/location';
import Search from './components/search/search';
import Selectedday from './components/selectedday.js/selectedday';


class App extends React.Component{
  render(){
    return(
            <div className="mainpage">
              <Location/>
              <Search/>
              <Dialyweather/>
              <Selectedday/>
            </div>  
             
    )
  }
}

export default App;
