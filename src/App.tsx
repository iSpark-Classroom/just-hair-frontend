import React from "react";
import AdminSideBar from "./components/SideBars/AdminSideBar";
import TopBar from "./components/TopBar/TopBar";
import ClientSideBar from "./components/SideBars/ClientSideBar";
import StylistCard from "./components/StylistCard/StylistCard";
import StylistSideBar from "./components/SideBars/StylistSideBar";

const App = () => {
  return (
    <div className="flex">
      <ClientSideBar />
      <TopBar user="Theola" />
    </div>
  );
};

export default App;
