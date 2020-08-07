import React, {useState} from 'react';
import axios from 'axios';

function Signup(props){
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleUsername = e => {
        setUsername(e.target.value);
    }

    const handleSignup = () => {
        setError(false);
        setLoading(true);
        axios.post("/user/signup",{"email":username, "password":password})
        .then(response => {
            setLoading(false);
            props.history.push("/user/login");
            alert("You have successfully signed up!")
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
            if (err.status === 401){
                setError(err.response.data.message);
            }else{
                setError("Apologies. Something went wrong. Please try again later.")
            }
        })
    
    }

    return (
        <div className="log-in-out-content">
            Signup<br /><br />
            <div>
                Email <br />
                <input type="text" onChange={handleUsername} />
            </div>
            <div>
                Password <br />
                <input type="password" onChange={handlePassword} />
            </div>
            {error && <><small style={{color: "red"}}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? "Loading..." : "Sign up"} onClick={handleSignup} disable={loading}/><br />
        </div>
    )
}


export default Signup;