import React, {useState} from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import {connect} from "react-redux";
import {logIn} from "../redux/actions/index";
import "./Login.css";

function mapDispatchToProps(dispatch){
    return {
        logIn: () => dispatch(logIn())
    };
}

function Login(props) {
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

    const handleLogin = () => {
        setError(false);
        setLoading(true);
        axios.post("/user/login",{"email":username, "password":password})
        .then(response => {
            props.logIn();
            setLoading(false);
            setUserSession(response.data.token, response.data.email);
            props.history.push("/");
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
            Login<br /><br />
            <div>
                Username <br />
                <input type="text" onChange={handleUsername} />
            </div>
            <div>
                Password <br />
                <input type="password" onChange={handlePassword} />
            </div>
            {error && <><small style={{color: "red"}}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? "Loading..." : "Log in"} onClick={handleLogin} disable={loading}/><br />
        </div>
    )
}


export default connect(null,mapDispatchToProps)(Login);