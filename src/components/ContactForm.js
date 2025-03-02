"use client"; 
import { useState } from "react";


export default function ContactForm() {
  // Initialize state to store form data
  const [formData, setFormData] = useState({ name: "", studentId: "", message: "" });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    // Send form data to the backend API
    const response = await fetch("/api/contact", {
      method: "POST", // Use the POST method to send data
      headers: { "Content-Type": "application/json" }, // Specify that the data is in JSON format
      body: JSON.stringify(formData), // Convert form data to JSON format
    });

    // Check the response from the server
    if (response.ok) {
      alert("Submitted successfully!"); 
      // Reset form fields after successful submission
      setFormData({ name: "", studentId: "", message: "" });
    } else {
      alert("Submission failed!"); 
    }
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 w-80 bg-neutral-900 text-white rounded-lg">
        <h2 className="text-center text-sm text-gray-300">Contact us</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="p-3 bg-gray-300 text-black rounded-md w-full" />
        <input type="text" name="studentId" placeholder="Email" value={formData.studentId} onChange={handleChange} required className="p-3 bg-gray-300 text-black rounded-md w-full" />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required className="p-3 bg-gray-300 text-black rounded-md w-full h-24" />
        <button className="bg-gray-300 text-black p-3 rounded-md w-full">Send</button>
      </form>
    </div>
  ); 
}
