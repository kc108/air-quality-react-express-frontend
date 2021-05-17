import React, { useState } from 'react';

import UserForm from "../components/UserForm";

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            
            <UserForm 
                title="Signup"
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                buttontext="Signup"
            />
        </div>
    )
}

export default Signup;
