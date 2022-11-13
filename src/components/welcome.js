import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

// This is a React hook. It runs when the component loads.

const Welcome = () => {
    
    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, []);
    return (
      <div className="spacer layer1" id="Welcome-Wrapper1">
        <div id="welcome" className="Section" data-aos="fade-up">
          <h1 id="header-name">Hi, I'm Steven Dawn.</h1>
          <h3>
            I'm a full-stack software engineer passionate about building
            responsive and interactive web applications.
          </h3>
        </div>
      </div>
    );
}

export default Welcome;