import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) return alert("Please enter an email");

    try {
      const response = await fetch("http://localhost:4001/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      if (data.success) {
        alert("Subscribed! Check your email.");
        setEmail("");
      } else {
        alert("Failed to subscribe: " + data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our Newsletter</p>
      <div className="newsletter-input">
        <input 
          type="email" 
          placeholder='Your Email Id' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='btn' onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
