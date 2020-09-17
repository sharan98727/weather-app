
const initialstate={
    name:''
}

const weatherreducer = (state=initialstate,action) =>{

    switch(action.type)
    {
        case "CHANGE_WEATHER":{
            return{
                ...state
            }
        }
        default: return state
    }

}
export default weatherreducer;