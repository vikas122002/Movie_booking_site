import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './App.css'; // Assuming the styles are in App.css

const BookMovie = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();  // This hook allows you to navigate programmatically

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the onSubmit function passed from App.js
    onSubmit({ name, email, mobile });

    // After submitting the data, navigate to the SeatBook page
    navigate('/seatbook');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Book a Seat</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Seat</button>
      </form>
    </div>
  );
};

export default BookMovie;
