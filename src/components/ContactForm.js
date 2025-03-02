"use client"; 
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", studentId: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Submitted successfully!"); 
      setFormData({ name: "", studentId: "", message: "" });
    } else {
      alert("Submission failed!"); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 w-96 bg-neutral-900 text-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-200">Contact Us</h2>
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="p-4 bg-gray-300 text-black rounded-md w-full text-lg"
        />
        <input 
          type="text" 
          name="studentId" 
          placeholder="Email" 
          value={formData.studentId} 
          onChange={handleChange} 
          required 
          className="p-4 bg-gray-300 text-black rounded-md w-full text-lg"
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          className="p-4 bg-gray-300 text-black rounded-md w-full h-32 text-lg"
        />
        <button className="bg-gray-300 text-black p-4 rounded-md w-full text-lg font-semibold hover:bg-gray-400 transition">Send</button>
      </form>
    </div>
  ); 
}
