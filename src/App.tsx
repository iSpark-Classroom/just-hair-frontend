import React from "react";
import AdminSideBar from "./components/SideBars/AdminSideBar";
import TopBar from "./components/TopBar/TopBar";
import SignIn from "./pages/general/auth/SignIn";
import SignUp from "./pages/general/auth/SignUp";

const App = () => {
  return (
    <div className="w-screen flex relative overflow-x-auto">
      {/* <AdminSideBar /> */}
      {/* <TopBar user="McClean" /> */}
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
