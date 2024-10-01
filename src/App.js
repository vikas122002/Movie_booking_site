import React, { useState } from "react";
import Home from './Home';

import SeatBook from './SeatBook';

import SingleMovie from './SingleMovie';
import Error from "./Error";
import { Routes, Route} from 'react-router-dom';
import "./App.css";
import BookMovie from './BookMovie';

const App = () => {
  const [userData, setUserData] = useState(null);
  const handleBooking = (data) => {
    setUserData(data);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id"  element={<SingleMovie />} />
        <Route path="/bookmovie"  element={<BookMovie onSubmit={handleBooking}/>} />
        <Route path="/seatbook"  element={<SeatBook userData={userData}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
