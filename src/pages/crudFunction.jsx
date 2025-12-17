import { useState } from "react";
import { useRouter } from "next/router";

const CrudFunctions = () => {

    const Router= useRouter();
    const [filter,setFilter] = useState('')
   
  const [mainData, setMainData] = useState([
    {
      name: "sarvesh",
      designation: "systems engineer",
      priority: "low",
      duedate: "01-10-2000",
    },
    {
      name: "shibi",
      designation: "systems engineer",
      priority: "low",
      duedate: "01-10-2001",
    },
    {
      name: "naveen",
      designation: "systems engineer",
      priority: "medium",
      duedate: "01-10-2002",
    },
    {
      name: "pavi",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2003",
    },
    {
      name: "subha",
      designation: "systems engineer",
      priority: "medium",
      duedate: "01-10-2004",
    },
    {
      name: "yuva",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2005",
    },
  ]);

  const [edit,setEdit]= useState(false)
  const [editIndex,setEditIndex] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    priority: "",
    duedate: "",
  });

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
if(edit){
    const updatedData = mainData.map((item,index)=> index ===editIndex ?formData:item)
    setMainData(updatedData)
    setEdit(false)
    setEditIndex(null)
} else {
    const newData=[...mainData,formData]
    setMainData(newData)
     Router.push({
        pathname:'/cardComponent',
        query:{data:JSON.stringify(newData)}
     })
}

    setFormData({
      name: "",
      designation: "",
      priority: "",
      duedate: "",
    });
   
  };

 



  const DeleteTask =(index)=>{
   setMainData(mainData.filter((_,i)=>i !==index))
  }
const EditTask =(item,index)=>{
setFormData(item)
setEdit(true)
setEditIndex(index)
}
const [filtData,setFiltData] = useState([])
const [isOpen,setIsOpen] = useState(false)
 const DropClick =()=>{
      setIsOpen(prev=>!prev)
      console.log("dropdown clicked",isOpen)
    }


const DisplayData= mainData.filter(item=> item.name.toLowerCase().includes(filter.toLowerCase()))

const Options =['High', "Medium", "Low"]
const [selectedPriority,setSelectedPriority] = useState('Priority')

// const ClickOptions=(Options)=>{
//   console.log(Options,'sarveh is clicked')
//   setSelectedPriority(Options)
//   setIsOpen(false)
// }




  return (
    <div>
      <div>Welcome to Crud Page</div>
<h4> Task Table</h4>
      <div>
        
        {DisplayData.map((item,index)=>{
            return (
                <div  style={{display:'flex',flexDirection:'row',padding:10,gap:20}} key={item.duedate} >
                    <div >{item.name}</div>
                     <div>{item.designation}</div>
                      <div >{item.priority}</div>
                       <div >{item.duedate}</div>
                       <button onClick={()=>EditTask(item,index)}> Edit Task</button>
                       <button onClick={()=>DeleteTask(index)}> Delete Task</button>

                    </div>
            )
        })}
      </div>
      <div style={{ padding: 20 }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: 400,
            gap: 8,
          }}
          onSubmit={HandleSubmit}
        >
          <label> Name</label>
          <input value={formData.name} onChange={HandleChange} name="name" />
          <label> Designation</label>
          <input
            value={formData.designation}
            onChange={HandleChange}
            name="designation"
          />
          <label>Priority</label>
          <input
            value={formData.priority}
            onChange={HandleChange}
            name="priority"
          />
          <label>DueDate</label>
          <input
            value={formData.duedate}
            onChange={HandleChange}
            name="duedate"
          />
          <button type="submit">{edit? 'update':'submit'}</button>
        </form>
        <div style={{padding:10}}>
            {/* <button onClick={()=> HandleSubmit()}>Navigate to Card Component</button> */}
        </div>
        <div>
           <div> Filter functionality </div>
           <input onChange={(e)=>setFilter(e.target.value)} placeholder="Enter name here" value={filter}/>
        </div>
        <div>
          <div style={{margin:'20px 0px'}}> Dropdown Functionality</div>
          <div style={{border:'1px solid #000000',width:'150px',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'cyan',position:'relative'}}  onClick={DropClick}
           >
{/* <div style={{}} >{selectedPriority}</div>
{ isOpen && <div  style={{border:'1px solid #000000',width:'150px',height:'95px',backgroundColor:'brown',position:'absolute',top:30}}   >
 {Options.map((Options)=>{
  return(
    <>
    <div key={Options} style={{padding:6,cursor:"pointer",borderBottom:'1px solid #000000',display:'flex',justifyContent:'center'}} onClick={()=>ClickOptions(Options)} >
      {Options}
    </div>
    </>
  )
 })} </div>} */}
 <button onClick={()=>Router.push('/localStorage')}> Navigate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudFunctions;
