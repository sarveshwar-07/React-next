
import { useEffect, useState } from "react"


const LocalScreen =()=>{

    const [formData,setFormData] = useState({
        name:'',
        age:''
    })
    


    const HandleChange =(e)=>{
setFormData({
    ...formData,
    [e.target.name]:e.target.value
})
    }
const [Retrive,setRetrive] = useState([])

    const HandleSubmit =()=>{
        const existing = JSON.parse(localStorage.getItem('userData')||'[]')
        const NewData=[...existing,formData]
        localStorage.setItem('userData',JSON.stringify(NewData))
        setRetrive(NewData)
        setFormData({
            name:'',
            age:''
        })
    }

    useEffect(()=>{
      setRetrive (JSON.parse(localStorage.getItem('userData')||'[]'))
    },[])
    return (
        <div>
            This is local stroage screen
            <div>
                <div>
                    <form onSubmit={HandleSubmit}>
                        <label>Name</label>
                        <input onChange={HandleChange} value={formData.name} name="name"/>
                        <label>Age</label>
                        <input onChange={HandleChange} value={formData.age} name="age" />
                        <button type="Submit">Submit</button>
                    </form>
                    
                      {Retrive.map((item)=>{
                        return (
                        
                            <div key={item.age}>
<div>{item.name}</div>
                            </div>
                            
                        )
                      })}
                       
                    
                </div>
            </div>
        </div>
    )
}
export default LocalScreen