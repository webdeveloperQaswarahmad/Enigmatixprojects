import React from "react";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./DashboardPanel/LoginForm/LoginForm";
import ForgotPassword from "./DashboardPanel/LoginForm/ForgotPassword";
import ResendEmail from "./DashboardPanel/LoginForm/ResendEmail";
import ContactUs from "./DashboardPanel/LoginForm/ContactUs";
import AdminDash from "./DashboardPanel/DashboardPage/AdminDash";
import AdminUsage from "./DashboardPanel/DashboardPage/AdminUsage"
import Document from "./DashboardPanel/DashboardPage/Document";
 import User from "./DashboardPanel/DashboardPage/User";
import UpdateUserData from "./DashboardPanel/DashboardPage/AddUserData";
import Location from "./DashboardPanel/DashboardPage/Location";
import AdminPage from "./DashboardPanel/DashboardPage/AdminPage"
import AddNewAdmin from "./DashboardPanel/DashboardPage/AddNewAdmin";
import UpdateUser from "./DashboardPanel/DashboardPage/UpdateUser";
import WriteTransfer from "./DashboardPanel/DashboardPage/WriteTransfer"

function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        {/* <LoginForm/> */}

        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResendEmail" element={<ResendEmail />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/AdminUsage" element={<AdminUsage />} />
          <Route path="/Document" element={<Document/>} />
          {/* <Route path="/AddUser" element={<AddUser/>} /> */}
          <Route path="/User" element={<User/>} />
          <Route path="/Location" element={<Location/>} />
          <Route path="/AdminPage" element={<AdminPage/>} />
          <Route path="/UpdateUserData" element={<UpdateUserData/>} />
          <Route path="/AddNewAdmin" element={<AddNewAdmin/>} />
          <Route path="/UpdateUser" element={<UpdateUser/>} />
          <Route path="/WriteTransfer" element={<WriteTransfer/>} />
          
        </Routes>
       {/* <User/> */}
       
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
