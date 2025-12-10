import { useState } from "react";
import { useRouter } from "next/router";

const CrudFunctions = () => {

    const Router= useRouter();
  const [mainData, setMainData] = useState([
    {
      name: "sarvesh",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2000",
    },
    {
      name: "sathish",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2001",
    },
    {
      name: "sarvesh1",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2002",
    },
    {
      name: "sathish1",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2003",
    },
    {
      name: "sarvesh2",
      designation: "systems engineer",
      priority: "high",
      duedate: "01-10-2004",
    },
    {
      name: "sathish2",
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



  return (
    <div>
      <div>Welcome to Crud Page</div>
<h4> Task Table</h4>
      <div>
        {mainData.map((item,index)=>{
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
      </div>
    </div>
  );
};

export default CrudFunctions;
