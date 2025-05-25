import { getEventData } from "../lib/events";
import { useEffect, useState } from "react";

export default function LoanRequests() {
  const [event, setEvent] = useState([]);
 
  useEffect(() => {    
    async function EventRequestUsers() {
      try {
        const data = await getEventData()
        console.log(data);

        if (data) {
          console.log("Hello Fetch Bhai", data);
          setEvent(data);
        }

        if (error) throw error;
      } catch (error) {
        console.log(error);
      }
    }
    EventRequestUsers();
  }, []);

  return (
    <section id="loan-requests" className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Event Requests</h2>
      <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left p-2">ID</th>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Description</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {event.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="p-2">{event.id}</td>
                <td className="p-2">{event.title}</td>
                <td className="p-2">{event.description}</td>
                <td className="p-2">{event.status}</td>
                <td className="p-2">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
