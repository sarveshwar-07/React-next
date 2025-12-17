import { useRouter } from "next/router";
import { useEffect } from "react";

const CardComponent = () => {
  const router = useRouter();
  const MainData = router.query.data ? JSON.parse(router.query.data) : [];

  useEffect(() => console.log(MainData), []);
  return (
    <div>
      This is card component
      <div>
        <button onClick={()=>router.push('/crudFunction')}> Back to CrudFunction</button>
        <h2> Main Data</h2>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {MainData.map((item) => {
            return (
              <div
                key={item.dueDate}
                style={{
                  border: "1px solid #000000",
                  padding: 5,
                  margin: 10,
                  width: "500px",
                }}
              >
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'10px 0px'}}>
                  
                  <div>{item.name}</div>
                  <div>{item.designation}</div>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:10}}>
                  <div>{item.priority}</div>
                  <div>{item.duedate}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default CardComponent;
