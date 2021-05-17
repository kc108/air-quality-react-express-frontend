import React from 'react';

const Searched = (props) => {
    // SAME AS LINE 11
    // const handleChange = (event) => {
    //     setLocation(event.target.value)
    // } 

    return (
        <form onSubmit={props.handleSubmit}>
            <input 
            type="text" 
            value={props.location} 
            onChange={(event) => props.setLocation(event.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Searched;



  