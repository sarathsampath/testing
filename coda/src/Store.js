import {createStore} from "redux"
import cakeReducer from "./ReactRedux/cakeReducer"

const store=createStore(cakeReducer)

export default store