import React from 'react';

const UserForm = (props) => {
    return (
        <form>
           <h1>{props.title}</h1>
           <input 
           type="text" 
           value={props.username} 
           onChange={(event) => props.setUsername(event.target.value)} /> 
           
           <input type="password" value={props.password} onChange={(event) => props.setPassword(event.target.value)} />
           <input type="submit" value={props.buttontext} />
        </form>
    )
}

export default UserForm;
