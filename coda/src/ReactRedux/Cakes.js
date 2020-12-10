import React from 'react'
import {buycake} from "./CakeAction"
import {connect} from "react-redux"
function Cakes(props) {
    return (
        <div>
           <h1>Buy Cakes-{props.numofcakes}</h1> 
           <button onClick={props.buycake}>Buy</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        numofcakes:state.numofcakes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buycake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cakes)
