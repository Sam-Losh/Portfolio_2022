import React, { useState } from "react";
// import Amplify from 'aws-amplify';
// import config from '../aws-exports'

// Amplify.configure(config);


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
    let response = await fetch("www.samlosh.com/contact", {
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
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" required placeholder="First Name, Last Name, and Company Name(if applicable)"/>
        <input type="email" id="email" required placeholder="Email"/>
        <textarea id="message" required placeholder="Write your message here"/>
        <button id="submit" type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;