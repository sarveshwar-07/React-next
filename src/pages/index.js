import Header from "@/components/Header/Header";
import TaskCard from "@/components/TaskCard/TaskCard";
import { useState } from "react";

const Home = () => {
  const MainData = [
    { name: "sarvesh", role: "systems Engineer", level: "3" },
    { name: "shibi", role: "associate consultant", level: "4" },
    { name: "sarvesh", role: "systems Engineer", level: "31" },
    { name: "shibi", role: "associate consultant", level: "41" },
    { name: "sarvesh", role: "systems Engineer", level: "32" },
    { name: "shibi", role: "associate consultant", level: "42" },
    { name: "sarvesh", role: "systems Engineer", level: "33" },
    { name: "shibi", role: "associate consultant", level: "43" },
    { name: "sarvesh", role: "systems Engineer", level: "34" },
    { name: "shibi", role: "associate consultant", level: "44" },

  ];
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#f4f9f6ff",
      }}
    >
      <Header
        HeaderText={"Am DashBoard"}
        ShowIcon={true}
        IconValue={"Hi I am the show"}
      />
      <div style={{ display: "flex", flexDirection: "row" ,flexWrap:'wrap'}}>
        {MainData.map((item) => {
          return (
            <TaskCard
              key={item.level}
              Name={item.name}
              Role={item.role}
              Level={item.level}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
