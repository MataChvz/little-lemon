import React from "react";

export const Card = (props) => {
    return (
    
    <div className='card'>
        <img src={props.img} alt="Meal" />
         <h3>{props.Meal} <span className='price'>{props.price}</span></h3>
            <p>{props.desc}</p>
        <h3>{props.Order}</h3>
    </div>
    )
}
