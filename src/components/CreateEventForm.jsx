import { React, useState } from "react";
import {insertEventData,publicUrl,updateEventData,uploadImage} from "../lib/events";
// import { toast } from 'react-toastify';

export default function CreateLoanForm() {
  const [step, setStep] = useState(1);
  const [title1, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [documents, setDocuments] = useState(null);
  const [category, setCategory] = useState("");

  async function submitDetail() {
    console.log(title1);
    console.log(desc);
    console.log(documents);
    console.log(loc);
    console.log(dateTime);
    console.log(category);

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser.userId);

    try {
      const data = await insertEventData({
        Title: title1,
        Description: desc,
        Date_Time: dateTime,
        Loc: loc,
        Category: category,
        ImageUrl: null,
        Status: "pending",
        UserId: currentUser.userId,
        Updated_At: null,
      });
      if (data) {
        console.log(data);
        if (documents.length > 0) {
          const imageData = await uploadImage({
            User: `${data[0].id}`,
            UserProvided: documents[0],
          });
          if (imageData) {
            console.log(imageData);
            const getPublicUrl = await publicUrl({
              UserDefine: imageData.path,
            });
            console.log(getPublicUrl);
            if (getPublicUrl) {
              console.log(getPublicUrl.publicUrl);
              const updateData = await updateEventData({
                ColName: 'image_url',
                EqCol: 'created_by',
                UpdateData: getPublicUrl.publicUrl,
                UserId: currentUser.userId,
              });
            }
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

  }

  function nextStep() {
    setStep((s) => s + 1);
  }
  function prevStep() {
    setStep((s) => s - 1);
  }

  return (
    <section id="create-loan" className="space-y-6">
      <h2 className="text-3xl font-bold mb-6">Create Event Request</h2>
      <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
        {step === 1 && (
          <>
            <h3 className="text-lg mb-4">Title</h3>
            <input
              type="text"
              placeholder="Title"
              value={title1}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />
            <h3 className="text-lg mb-4">Description</h3>
            <input
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <h3 className="text-lg mb-4">Location</h3>
            <input
              type="text"
              placeholder="Location"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <h3 className="text-lg mb-4">Date-Time</h3>
            <input
              type="datetime-local"
              placeholder=""
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            />

            <h3 className="text-lg mb-4">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Tech">Tech</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
            </select>

            <h3 className="text-lg mb-4 mt-4">Upload Event Image</h3>
            <input
              onChange={(e) => setDocuments(e.target.files)}
              type="file"
              className="border p-2 w-full rounded mb-4"
            />
            <button
              onClick={nextStep}
              className="px-4 py-2  text-black bg-blue-500 rounded"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg mb-4">Review & Submit</h3>
            <p className="mb-4">
              Review your information here before submitting.
            </p>
            <button
              onClick={prevStep}
              className="px-4 py-2 bg-gray-300 rounded me-5"
            >
              Back
            </button>
            <button
              onClick={submitDetail}
              className="px-4 py-2 bg-green-500 text-black rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
