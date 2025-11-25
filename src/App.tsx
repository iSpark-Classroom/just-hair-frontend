import React from "react";
import StylistSideBar from "./components/SideBars/StylistSideBar";
import TopBar from "./components/TopBar/TopBar";
import AdminSideBar from "./components/SideBars/AdminSideBar";

const App = () => {
  return (
    <div className="flex items-start">
      <AdminSideBar />
      <TopBar user={"Jason"} />
    </div>
  );
};

export default App;
