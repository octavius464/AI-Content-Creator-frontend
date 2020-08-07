import React from "react"
import {
    Link
  } from "react-router-dom";
import "./Header.css";
import UserActionHeader from './UserActionHeader';

function Header(){
    return(
        <header className="navbar" >
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/systeminfo">System Info</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <UserActionHeader />
        </header>
    )
}

export default Header