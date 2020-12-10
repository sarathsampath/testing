import React,{useState} from 'react'
const shortid=require("shortid")

function Todoform(props) {
    const [values,setvalue]=useState("")
    const handleclick=e=>{
        e.preventDefault();
        console.log(values)
       props.onClick({
            id:shortid.generate(),
            text:values
        })
        setvalue("")
    }
    return (
        <div>
            <form>
            <input type="text" value={values} onChange={e=>setvalue(e.target.value)}></input>
            <button onClick={handleclick}>submit</button>
            </form>
            
        </div>
    )
}

export default Todoform
