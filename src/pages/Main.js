import React, { useState } from 'react';
import Searched from "../components/Searched";


const Main = (props) => {

    const [location, setLocation] = useState("");

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(location);
    }

    return (
        <main>
          <h1>Main</h1>
          <Searched location={location} setLocation={setLocation} handleSubmit={handleSubmit} /> 
        </main>
    )
}

export default Main;
