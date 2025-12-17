import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductFetch } from "@/services/searchService";

const Sorting = () => {
  const MainData = [
    { name: "Sarvesh", role: "SE", doj: "10-12-2025" ,jb:1 ,priority:'low' },
    { name: "Naveen", role: "SSE", doj: "11-12-2025" ,jb:2,priority:'high'  },
    { name: "Shibi", role: "TA", doj: "12-12-2025" ,jb:3,priority:'medium' },
  ];

  const [apData,setApData] = useState([])

  useEffect(()=>{
const storeData = async ()=>{
  const respo = await  ProductFetch()
  setApData(respo)
}

storeData()
   
  
  },[])


  const [textData,setTextData] = useState('')
  const Router = useRouter()
  const Options = ["Ascending","Desending"];
  const [selected, setSelected] = useState("Ascending");

//   const FilteredData =[...apData].sort((a,b)=>{
// return selected=== 'Ascending'? (a.title.localeCompare(b.title)) : (b.title.localeCompare(a.title))
//   }
    
//   )


  const [isOpen,setIsOpen] = useState(false)
  const [value,setValue] = useState('')

  const [formData,setFormData]= useState({
    name:'',
    age:''
  })

 

//   const ParseDate = (datestr)=>{
// const [day,month,year] = datestr.split("-")
// return new Date (year,month -1,day)
//   }

//   const SortedCopy = [...MainData].sort((a,b)=>{
// const dateA= ParseDate(a.doj)
// const dateB= ParseDate(b.doj)

// return selected==="NEWEST"
// ? dateB-dateA : dateA-dateB
//   }

// )


// const SortedCopy =[...MainData].sort((a,b)=>
    
//    selected==="NEWEST"
//    ?  (a.jb) - (b.jb) :
//   (b.jb) - (a.jb)
   
  
// )

//   console.log(SortedCopy,'Sarvesh')


// const SortedCopy =[...MainData].sort((a,b)=>{
//     return selected==="Ascending" ? (a.name.localeCompare(b.name)) : (b.name.localeCompare(a.name))
// }
    
// )


// const ParseDate = (dateStr)=>{
//     const [day,month,year] = dateStr.split("-")
//     return new Date(year,month -1,day)
// }


// const SortedData =[...MainData].sort((a,b)=>{

// const dateA = ParseDate(a.doj)
// const dateB = ParseDate(b.doj)

//     return selected ==="Ascending"
//     ? dateA - dateB : dateB -  dateA


// })

// const FilterData = MainData.filter((item)=> 
//   item.name.toLowerCase().includes(value.toLowerCase())

//     )
// const MainFilt = MainData.filter((item)=>
//   item.name.toLowerCase().includes(textData.toLowerCase())

// )





const HandleSubmit =(e)=>{
    e.preventDefault()
   console.log(formData,'sarvesh')
   localStorage.setItem('UserData',JSON.stringify(formData))
   Router.push({
    pathname:('/displayPage'),
    
   })
}



  const HandleClick =()=>{
    setIsOpen(prev=>!prev)
  }


//   const DropDownData = FilterData.filter((item)=>
//     item.priority.toLowerCase().includes(selected.toLowerCase())
// )


const HandleChange =(e)=>{
setFormData({
    ...formData,
    [e.target.name]:e.target.value
})
}


const TypeDate = apData.filter((item)=>item.title.toLowerCase().includes(textData.toLowerCase()))
  return (
    <div>
      <div>
        <div> Sort the given data </div>
        {/* <div>
          {DropDownData.map((item) => {
            return (
              <div
                key={item.jb}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  margin: "20px 0px",
                }}
              >
                <div>{item.name}</div>
                <div>{item.role}</div>
                <div>{item.doj}</div>
                 <div>{item.jb}</div>
                  <div>{item.priority}</div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div>
        <div style={{margin:'10px 0px'}}>Sort using Ascending/decending</div>
        <div
          style={{
            border: "1px solid #000000",
            width: "150px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position:'relative',
            backgroundColor:'darkgray'
          }} onClick={HandleClick}
        >
          {selected}
        
        </div>
        {isOpen && (
 <div style={{position:'absolute',backgroundColor:'aquamarine',width:'150px',height:'90px',top:'60'}}>{Options.map((Options)=> {
    return (
        <div key={Options} style={{display:'flex',flexDirection:'column',cursor:'pointer',justifyContent:'center',padding:5,alignItems:'center',borderBottom:'1px solid #000000'}} onClick={()=>{setSelected(Options),setIsOpen(false)}}>
            <div>
                {Options}
                </div>
             
            </div>
    )
 })}</div>
        )}
         <div>
            Filter component
         </div>

         <div>
            <h4>Filter by name here</h4>
            <input onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Enter name here" />
         </div>
         <div>
            <form onSubmit={HandleSubmit}>
                <label>Name</label>
                <input onChange={HandleChange} value={formData.name} name="name"/>
                <label>Age</label>
                <input  onChange={HandleChange} value={formData.age} name="age"/>
                <button type='submit'>Submit</button>
            </form>
         </div>
         <div>
          <div>
            {TypeDate.map((item)=>{
              return (
                <div key ={item.id}>
                  <div>
                    {item.title}
                    </div>
                     <div>
                    {/* {item.slug} */}
                    </div>
                     <div>
                    {/* {item.price} */}
                    </div>
                     <div>
                    {/* {item.description} */}
                    </div>
                  </div>
              )
            })}
          </div>
          <div>
           <h1>Filter here</h1>
           <input placeholder="Enter here" onChange={(e)=>setTextData(e.target.value)} value={textData}/>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Sorting;
