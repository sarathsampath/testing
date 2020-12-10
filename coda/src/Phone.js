import React,{useState} from 'react'
import "./Phone.css"
function Phone() {
    const [value1,setvalue1]=useState([])
    const [value2,setvalue2]=useState([])
    const [value3,setvalue3]=useState([])
    const [temp1,settemp1]=useState("")
    const [temp2,settemp2]=useState("")
    const [temp3,settemp3]=useState("")
    const handleone=()=>{
       const data1=[...value1,temp1]
        setvalue1(data1)
        const data2=[...value2,temp2]
        setvalue2(data2)
        const data3=[...value3,temp3]
        setvalue3(data3)
        settemp1("")
        settemp2("")
        settemp3("")

    }
    return (
        <div>
            <div>
            <label>FirstName</label>
                <div>
                    <input type="text" value={temp1} onChange={e=>settemp1(e.target.value)}></input>
                </div><label>LastName</label>
                <div><input type="text" value={temp2} onChange={e=>settemp2(e.target.value)}></input>
                </div><label>Phone</label>
                <div><input type="text" value={temp3} onChange={e=>settemp3(e.target.value)}></input>
                </div>
 
            <div>
                <button onClick={handleone}>Add</button>
                
            </div>
            <div className="Phonecss">
                
            <div>
                
                {value1.map((i)=><p>{i}</p>)}
            </div>
            
            <div>
                {value2.map((i)=><p>{i}</p>)}
            </div>
            
            <div>
                {value3.map((i)=><p>{i}</p>)}
            </div>
            </div>
            
                </div>
        </div>
    )
}

export default Phone

