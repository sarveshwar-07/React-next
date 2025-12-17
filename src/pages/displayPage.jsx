
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const DisplayPage=()=>{

    const Router = useRouter()
    // const MainData = Router.query.data ? JSON.parse(Router.query.data):[]
const [storedData,setStoredData] = useState([])

    useEffect(()=>{
      const StoreData= JSON.parse(localStorage.getItem('UserData')) || []
      console.log(StoreData,'new')
setStoredData(StoreData)
    },[])
    return (
        <div>
            This is display Page
           <div>
            {storedData && (
                <div>
                <div>{storedData.name}</div>
                  <div>{storedData.age}</div>
                  </div>
            )}
           </div>
        </div>
    )
}

export default DisplayPage;