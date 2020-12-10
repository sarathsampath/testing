import {BUY_CAKE} from "./CakeFunction"
 const initialcake={
    numofcakes:10
}
const cakeReducer=(state=initialcake,action)=>{
    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state,
                numofcakes:state.numofcakes-1
            }
            default:
                return state
    }
}
export default cakeReducer