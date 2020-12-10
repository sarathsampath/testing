import React from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import './App.css';
import Cakes from "./ReactRedux/Cakes"
import {Provider} from "react-redux"
import Toggle from "./Toggle"
//import Todolist from './components/Todolist';
import store from "./Store"
import Phone from "./Phone"
const App=()=>
(
<div>
  <Toggle/>
 
</div>
)
export default App;
