import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="name" required placeholder="First, Last, and company(if applicable) name"/>
      </div>
      <div>
        <input type="email" id="email" required placeholder="Email"/>
      </div>
      <div>
        <textarea id="message" required placeholder="Write your message here"/>
      </div>
      <button id="submit" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;