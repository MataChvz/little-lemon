import React from "react";
import { Link } from "react-router-dom"; 
import { useReducer } from "react";
import { useNavigate, Routes, Route} from "react-router-dom";

import BookingPage from "./Booking/BookingPage";

const Main = () => {

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };
    
    const initialState = {AvailableTimes:  fetchAPI( new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {AvailableTimes: fetchAPI(new Date(date))}
    }
    
    return (
        
        <main>
            <>
            <Routes>
            <Route path="/Booking" element={<BookingPage AvailableTimes={state} dispatch={dispatch} SubmitForm={submitForm} />} /> 
            </Routes>
</>
            <section className ='HomeInfo'>
            <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur iscing elit,
                        sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.</p>
                    <Link to="/Booking" className ='BookingLink'><button>
                    Reserve a Table</button></Link>
                        </div>
                <div>
                    
            <img src="MainImg.jpg" alt="reserveIMG" />
            </div>
            </section>

       </main>   
    )
};

export default Main;