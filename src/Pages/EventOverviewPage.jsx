import React from "react";
import { useParams } from "react-router-dom";
import { getEventData } from "../lib/events";
import { useEffect, useState } from "react";
function EventOverviewPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loc, setLoc] = useState("");
  const [dateTime, setDateTime] = useState("");
    const [image, setImage] = useState("")
    
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);

  const { eventId } = useParams();

  console.log(eventId);

  useEffect(() => {
    async function matchData() {
      const eventData = await getEventData();
      console.log(eventData);

      eventData.forEach((element) => {
        console.log(element.id);

        if (element.id == eventId) {
          setTitle(element.title);
          setDesc(element.description);
          setLoc(element.location);
          setDateTime(element.date_time);
          setImage(element.image_url)
        }

        if (currentUser.userId === element.created_by) {
          setName(currentUser.name);
          setEmail(currentUser.email);
        }
      });
    }
    matchData();
  }, []);


  const participants = [
    { name: "Sara Ahmad", email: "sara@example.com" },
    { name: "Usman Tariq", email: "usman@example.com" },
    { name: "Zainab Malik", email: "zainab@example.com" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Event Overview</h1>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        {/* User Details */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p>
            <span className="font-medium">Name:</span> {name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {email}
          </p>
        </div>

        {/* Event Details */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Event Details</h2>
          <p>
            <span className="font-medium">Title:</span> {title}
          </p>
          <p>
            <span className="font-medium">Date:</span> {dateTime}
          </p>
          <p>
            <span className="font-medium">Location:</span> {loc}
          </p>
          <p>
            <span className="font-medium">Description:</span> {desc}
          </p>
          <img src={image} alt="" />
        </div>

        {/* Participant Details */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Participant Details</h2>
          <ul className="space-y-2">
            {participants.map((p, index) => (
              <li key={index} className="border-b pb-1">
                <span className="font-medium">{p.name}</span> - {p.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EventOverviewPage;
