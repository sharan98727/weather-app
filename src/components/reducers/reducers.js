
const initialstate={
            maxtemp:27,
            selectediconurl:`http://openweathermap.org/img/wn/10d@2x.png`,
            pressure:35,
            humidity:42,
            sunrise:730,
            sunset:830,
            lat:17,
            lon:78,
} 


const weatherreducer = (state=initialstate,action) =>{

    switch(action.type)
    {
        case "MAX_TEMP":{
            return{
                ...state,
                maxtemp:action.payload.temperature,
                selectediconurl:action.payload.picture,
                pressure:action.payload.pressure,
                humidity:action.payload.humidity,
                sunrise:action.payload.sunrise,
                sunset:action.payload.sunset,
            }
        }

        case "LATITUDE&LONGITUDE":{
            console.log(action.payload.lat);
            return{
                ...state,
                lat:action.payload.lat,
                lon:action.payload.lon,
            }
        }

        // case "LAT&LONG":{
        //     return{
        //         ...state,
        //         lat:action.payload.latitude,
        //         lon:action.payload.longitude,
        //     }
        // }
        default: return state
    }

}
export default weatherreducer;



