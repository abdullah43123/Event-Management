import { Link} from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="flex flex-col gap-8">
    <h2 className="text-3xl font-bold text-blue-700">Dashboard</h2>

    <nav className="flex flex-col gap-3 mt-1 text-gray-700">
        <Link to="/overview" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/loan-requests" className="hover:text-blue-600">Event Requests</Link>
        <Link to="/create-loan" className="hover:text-blue-600">Create Event</Link>
        <Link to="/profile" className="hover:text-blue-600">My Profile</Link>
        <Link to="/logout" className="hover:text-blue-600 text-red-600">LogOut</Link>
      </nav>
    </div>
  );
}
