import React,{useState} from 'react'

function Toggle() {
    const [value,setvalue]=useState(true)
    const [toggling,settoggling]=useState("off")
    const handleclick=()=>{
        setvalue(!value)
    }
    return (
        <div>
            {value?
            <button>on</button>:<button>Off</button>}
            <button onClick={handleclick}>Click</button>
        </div>
    )
}

export default Toggle
