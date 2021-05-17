import { Link } from "react-router-dom";
import React, { useState } from 'react';

import UserForm from "../components/UserForm";

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            
            <UserForm 
                title="Login"
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                buttontext="Login"
            />
            <p>Not signed up? <Link to="/signup">Signup here</Link></p>
        </div>
    )
}

export default Login;
