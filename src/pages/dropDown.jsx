
import React, { useState } from "react";


const dropDown = () => {








  const [selected, setSelected] = useState("Priority");
  const [isOpen, setIsOpen] = useState(false);
  const [filterData, setFilterData] = useState("");
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
  const Options = ["high", "medium", "low"];
  const Onclick = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen, "sarvesh");
  };

  const Filter = mainData.filter((item) =>
    item.priority.toLowerCase().includes(filterData.toLowerCase())
  );
  return (
    <div>
      <div>
        <div style={{ margin: "20px 0px" }}>Dropdown Functionality</div>
        <div
          style={{
            border: "1px solid #000000",
            height: "30px",
            width: "150px",
            backgroundColor: "grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          onClick={Onclick}
        >
          {selected}
        </div>
        {isOpen && (
          <div
            style={{
              border: "1px solid #000000",
              height: "90px",
              width: "150px",
              position: "absolute",
              top: 90,
            }}
          >
            {Options.map((Options) => {
              return (
                <div
                  key={Options}
                  style={{
                    padding: 5,
                    borderBottom: "1px solid #000000",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setSelected(Options);
                    setIsOpen(false), setFilterData(Options.toLowerCase());
                  }}
                >
                  <div>{Options}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <div style={{ marginTop: "90px" }}>Data Display</div>
        {Filter.map((item) => {
          return (
            <div
              key={item.duedate}
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px 0px",
                gap: 20,
              }}
            >
              <div>{item.name}</div>
              <div>{item.designation}</div>
              <div>{item.priority}</div>
              <div>{item.duedate}</div>
            </div>
          );
        })}
      </div>
      <div>
        {/* <div>{LastPage.map((item)=>{
            return (
                <div key={item.age}>
                    <div>
                        {item.name}
                        </div>
                    </div>
            )
        })}</div> */}
      </div>
    </div>
  );
};

export default dropDown;
