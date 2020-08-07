import React, {useState} from 'react';
import {getToken, removeUserSession} from './Utils/Common';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {logOut} from "../redux/actions/index";

const mapStateToProps = state => {
    return { isLoggedIn: state.isLoggedIn };
}

function mapDispatchToProps(dispatch){
    return {
        logOut: () => dispatch(logOut())
    };
}

function UserActionHeader(props){
    const [token, setToken] = useState(getToken());

    const handleLogOut = () => {
        removeUserSession();
        setToken(null);
        props.logOut();
    }

    if(!props.isLoggedIn){
        return (
        <ul className="user-action-header">
            <li>
                <Link to="/user/signup" >Sign up</Link>
            </li>
            <li>
                <Link to="/user/login">Log in</Link>
            </li>
         </ul>
         )
    }else{
        return (
        <ul className="user-action-header">
            <li>
                <Link onClick={handleLogOut} to="/user/logout" >Log out</Link>
            </li>
        </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActionHeader);