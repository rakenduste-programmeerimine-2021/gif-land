import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import {useContext} from "react";
import {Context} from "../store";

function Navbar (){

    const [state] = useContext(Context);

    if (!state.auth.token) {
    return (
        React.createElement("header", { className: "navbar" }, 
            React.createElement("div", { className: "navbar__title"},
                <Link to="/Posts" style={{ textDecoration: 'none', color: 'white' }}>
                    <img className="logo" src="/Gif-Land.png" alt=""/> 
                </Link>
                )
        ));

    } else {
    return (
        React.createElement("header", { className: "navbar" }, 
        React.createElement("div", { className: "navbar__title"},
            <Link to="/Posts" style={{ textDecoration: 'none', color: 'white' }}>
                <img className="logo" src="/Gif-Land.png" alt=""/> 
            </Link>),
            React.createElement("div", { className: "navbar__item"},
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Logout
            </Link>)
        ));
    }

}

export default Navbar;
