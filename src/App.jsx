import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import EventOverviewPage from "./Pages/EventOverviewPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route path="/*" element={<Dashboard />} />
          <Route path="/adminDashboard" element={<AdminDashboard/>}/>
          <Route path="/eventoverview/:eventId" element={<EventOverviewPage />}/>

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
