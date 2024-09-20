import './App.css'
import React from 'react'
import Homepage from './Components/Homepage';
import {Routes,Route} from 'react-router-dom';
import BookingPage from './Components/Booking/BookingPage'
import Confirmed from './Components/ConfirmationPage';


function App() {

  return (
    <div className="App">
    
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path = "/Booking" element ={<BookingPage/>}/>
          <Route path="/Confirmed" element={<Confirmed/>}/>
      </Routes>

    </div>
  );
};

export default App;
