import React from "react";
import Nav from "./Navigation";
import Main from "./Mainn";
import Specials from "./Specials";
import Review from "./Reviews";
import Footer from "./Footerr"

const Homepage = () => {
    return (
        <div className="HomePage">
        <>
                <Nav />
                <Main />
                <Specials/>
                <Review />
                <Footer/>
        </>
      </div>
    )
};  

export default Homepage;