import React from "react";
import { Card } from "./Card";


const Specials = () => {
    return (

        
<div className='specials'> 

            
            <div className='SpecialsTop'>
                    <h1>This Weeks Specials!</h1>
            </div>
               
           
        <section>
       <div className='card-container'>    
        <Card Meal="Greek Salad" img ='greekSalad.jpg'
        Order="Order delivery" price="$12.99"
        desc="The famous greek salad of crispy lettuce, 
        peppers, olives and our Chicago style feta cheese,
        garnished with crunchy garlic and rosemary croutons."/>
      
        <Card Meal="Bruchetta"  img ='Bruchetta.jpg'
        Order="Order delivery" price="$5.99"
        desc="Our Bruschetta is made from grilled bread that 
         has been smeared with garlic 
        and seasoned with salt and olive oil. "/>
            
        <Card Meal="Lemon Cake" img ='lemonCake.jpg'
            Order="Order delivery" price="$5.00"
            desc="This comes straight from grandma’s recipe book, 
            every last ingredient has been sourced 
        and is as authentic as can be imagined."/>
     </div>
        </section>
        </div>
    )
};

export default Specials;