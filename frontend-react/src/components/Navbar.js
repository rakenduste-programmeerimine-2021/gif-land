import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useContext } from 'react';
import { Context } from "../store";
import { logoutUser} from "../store/actions";

function Navbar (){
    const [state, dispatch] = useContext(Context)

    function logoutHandler(nr){
        if(nr === 1){
            dispatch(logoutUser());
        }

    }
    if (!state.auth.token) {
        return (
            <div className="Navbar">
                <div className="NavbarL">
                <Link to ="/postsAll">
                    <img className="logo" src="/Gif-Land.png" alt="Veebilehe logo"></img>
                </Link>
                </div>
                <div className="NavbarR">
                <Link to="/login">
                    <Button type="primary">Log In</Button>
                </Link>
                </div>
            </div>
        );
    
    } else {
        return (
            <div className="Navbar">
                <div className="NavbarL">
                <Link to ="/posts">
                    <img className="logo" src="/Gif-Land.png" alt="Veebilehe logo"></img>
                </Link>
                </div>
                <div className="NavbarR">
                <Link to="/addPost">
                    <Button type="primary">Upload Post</Button>
                </Link>
                <Link to="/profilepage">
                    <Button type="primary">Profile Page</Button>
                </Link>
                <Link to="/postsAll" onClick={() => logoutHandler(1)}>
                    <Button type="primary">Log Out</Button>
                </Link>
                </div>
            </div>
        );
    }

}

export default Navbar;