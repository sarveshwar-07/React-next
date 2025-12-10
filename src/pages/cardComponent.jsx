
import { useRouter } from "next/router";
import { useEffect } from "react";


const CardComponent =()=>{
    const router= useRouter()
    const MainData = router.query.data? JSON.parse(router.query.data) :[]

    useEffect(()=>
    console.log(MainData),[])
    return (
        <div>
            This is card component
            <div>
                <h2> Main Data</h2>
                <div>
                    {MainData.map((item)=>{
                        return (
                            <div key={item.dueDate}>
                                <div>{item.name}</div>
                                 <div>{item.designation}</div>
                                  <div>{item.priority}</div>
                                   <div>{item.duedate}</div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default CardComponent;