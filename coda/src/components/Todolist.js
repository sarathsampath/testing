import React,{useState} from 'react'
import Todoform from './Todoform'
import "./Todolist.css"
function Todolist() {
    const [temp,settemp]=useState(false)
    const [todos,settodo]=useState([])
    const [id,setid]=useState(0)
    const [complete,setcomplete]=useState([])
    const [editvalue,setedit]=useState("")
    const [dispcomplete,setdispcomplete]=useState(false)
    const addtodo=todo=>{
        console.log(todo)
        const newtodo=[todo,...todos]
        settodo(newtodo)

    }
 
    const handledelete=id=>{
        console.log(id)
        const newar=todos.filter(todos=>todos.id!=id)
        settodo(newar)
        console.log(todos)
    }
    const handleedit=(id)=>{
        console.log(id)
        console.log(todos)
        todos.map((i)=>{if(i.id==id){
            console.log(true)
            console.log(id)
            setid(id)
        }})
        settemp(!temp)
    }
    const handleeditvalue=e=>{
        e.preventDefault()
        console.log(id);
        console.log(editvalue)
        todos.map((i)=>{if(i.id==id){
           i.text=editvalue
        }})
        console.log(todos)
        settodo(todos)
        settemp(!temp)
    }
    const handleComplete=(id1,text1)=>
    {
        const data={
            id:id1,
            text:text1
        }
        const temp=[data,...complete]
        setcomplete(temp)
        const newar=todos.filter(todos=>todos.id!=id1)
        settodo(newar)
        console.log(todos)
        setdispcomplete(true)

    }
    const handleclear=()=>{
        setcomplete([])
        setdispcomplete(false)
    }
    return (
        <div className="main">
            <Todoform onClick={addtodo}/>
            <div className="display">
            <div className="display1">
                
            {todos.map((i)=><div><div className="disptext">{i.text}</div><button onClick={()=>handledelete(i.id)}>Delete</button><button onClick={()=>handleedit(i.id)}>Edit</button><button onClick={()=>handleComplete(i.id,i.text)} >Completed</button></div>)}
            </div>
            <div className="displayedit">
            {temp?<div><input type="text" value={editvalue} onChange={e=>setedit(e.target.value)}></input><button onClick={handleeditvalue}>ok</button></div>:null}
            </div>
            </div>
            <div >
                {dispcomplete?<div className= "displaycomplete">
                <div><h1>Completed task</h1></div>
            {complete.map((i)=><div>{i.text}</div>)}
            <button onClick={handleclear}>Clear</button></div>:null}
            </div>
            
        </div>
    )
}

export default Todolist
