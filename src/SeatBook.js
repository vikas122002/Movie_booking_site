import React from "react";
import { useNavigate } from 'react-router-dom';

const SeatBook = ({ userData }) => {
  const navigate = useNavigate();

  // If userData is null (which means no data was passed), redirect to the booking page
  if (!userData) {
    navigate('/bookmovie');
    return null;
  }

  // Function to generate a random booking ID
  const generateBookingId = () => {
    return `BOOK${Math.floor(Math.random() * 100000)}`;
  };

  const bookingId = generateBookingId();

  return (
    <div>
      <h2>Seat Booked!</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Mobile: {userData.mobile}</p>
    </div>
  );
};

export default SeatBook;
