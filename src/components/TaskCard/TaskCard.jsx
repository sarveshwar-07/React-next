import { TaskContainer } from "./TaskCard.styled";


export default function TaskCard({Name,Role,Level}){
return (
   <TaskContainer>
   <h4>{Name}</h4>
   <h5>{Role}</h5>
   <h6>{Level}</h6>
   </TaskContainer>
)

}