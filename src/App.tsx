import React from "react";
import AdminSideBar from "./components/SideBars/AdminSideBar";
import TopBar from "./components/TopBar/TopBar";
import SignIn from "./pages/general/auth/SignIn";
import SignUp from "./pages/general/auth/SignUp";
import BookingSummaryCard from "./components/Booking/BookingSummaryCard";
import PendingAppointmentCard from "./components/Appointment/PendingAppointmentCard";
import CompleteAppointmentCard from "./components/Appointment/CompleteAppointmentCard";
import CancelledAppointmentCard from "./components/Appointment/CancelledAppointmentCard";
import ServiceCard from "./components/ServiceCard/ServiceCard";
import ClientSideBar from "./components/SideBars/ClientSideBar";
import BrowserHairStyles from "./pages/user/BrowserHairStyles/BrowserHairStyles";

const App = () => {
  return (
    <div>
      <BrowserHairStyles />
      {/* <SignUp /> */}
    </div>
  );
};

export default App;
