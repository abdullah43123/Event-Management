import { useEffect, useState } from "react";
// import { CheckSession } from "../lib/other";
import { useNavigate } from "react-router-dom";
import { getEventData } from "../lib/events";


export default function Overview() {
  const [event, setEvent] = useState([]);
  const [pendingState, setPendingState] = useState(null);
  const [approvedState, setApprovedState] = useState(null);
  const [rejectedState, setRejectedState] = useState(null);
  // const navigate = useNavigate()
  // useEffect(()=>{
  //   async function checkSessionHandler() {
  //     const hero = await CheckSession();
  //     if (hero == null) {
  //       navigate('/signin');
  //     }
  //   }
  //   checkSessionHandler();
  
  // },[])

  useEffect(() => {
    async function EventRequestUsers() {
      
      try {
        const data = await getEventData()
        console.log(data);
       
        if (data) {
          console.log("Hello Fetch Bhai", data);
          
          setEvent(data);
          // Calculate counts here
          let pending = 0;
          let approved = 0;
          let rejected = 0;

          data.forEach((event) => {
            if (event.status === "pending") pending++;
            else if (event.status === "approved") approved++;
            else if (event.status === "rejected") rejected++;
          });

          setPendingState(pending);
          setApprovedState(approved);
          setRejectedState(rejected);

           
        }

        if (error) throw error;
      } catch (error) {
        // console.log(error);
      }
    }
    EventRequestUsers();
  }, []);

  return (
    <section id="overview" className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">{"Pending Requests"}</h3>
          <p className="text-3xl">{pendingState}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">{"Approved Events"}</h3>
          <p className="text-3xl">{approvedState}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">{"Rejected Events"}</h3>
          <p className="text-3xl">{rejectedState}</p>
        </div>
        
      </div>
    </section>
  );
}
