import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import EventRequests from "../components/EventRequests";
import CreateEventForm from "../components/CreateEventForm";
import Profile from "../components/Profile";
// import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export default function Dashboard() {
//   const checkSession = JSON.parse(localStorage.getItem("currentSession"));
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!checkSession) {
//       console.log(checkSession);
//       console.log("hello");

//       navigate("/signin");
//     }
//   }, []);

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <aside className="w-64 h-full bg-white border-r p-6 flex flex-col shadow-md">
        <Sidebar />
      </aside>

      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/loan-requests" element={<EventRequests />} />
          <Route path="/create-loan" element={<CreateEventForm />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/logout" element={<LogoutButton />} /> */}
        </Routes>
      </main>
    </div>
  );
}
