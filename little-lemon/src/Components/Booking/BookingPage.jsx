import React from "react";
import Nav from '../Navigation';
import Footer from "../Footerr"
import Form from "./BookingForm";
import './Booking.css'


const BookingPage = (props) => {
    return (
        <>
        <Nav />
        <main>
        <Form />

        </main>
      
      
         <Footer/>
        
       </>
    )
};

export default BookingPage;
