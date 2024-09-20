import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
    
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("Options");

    const formisValid = () => {
        return (
            name &&
            date &&
            time &&
            guests &&
            occasion != "Options"
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };



    return (
        <div className ='form'>   
            <form onSubmit = {handleSubmit}>
            <fieldset>
                <h2>Reservation</h2>
                <div className="field">
                    <label htmlFor="Name">Name <sup>*</sup> </label>
                    <input type="text" value ={name} onChange = {(e)=> {setName(e.target.value)}}
                    placeholder="David Goggins" required
                    />
                </div>
            
                <div className="field">
                    <label htmlFor="Date">Select Day <sup>*</sup> </label>
                    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}
                    
                        placeholder="MM/DD/YYYY"
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="Time">Select Hour <sup>*</sup> </label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)}
                        placeholder="01:45 PM"
                    />
                </div>
                <div className="field">
                    <label htmlFor="Guests">How Many People? <sup>*</sup> </label>
                    <input type="Number" min = "1" value ={guests} onChange = {(e)=>setGuests(e.target.value)}
                    placeholder="0" required
                    />
                </div>
                <div className="field">
                    <label htmlFor="Occasion">Occasion <sup>*</sup> </label>
                    <select value={occasion} onChange = {(e)=>setOccasion(e.target.value)}>
                        <option value="Options">Options</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                    
                    </div>
                    
                    <Link to="/Confirmed" className ="TableBooked">
                    <button type="submit" disabled={!formisValid()}>
                        Book Table
                </button>
                    </Link>
                    
            </fieldset>
            </form>
            </div>

    );
    
}

export default Form;