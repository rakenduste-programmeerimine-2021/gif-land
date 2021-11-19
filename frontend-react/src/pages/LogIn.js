import LogInForm from "../components/LogInForm";
import './Register.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import { useHistory } from "react-router-dom";



import {useContext} from 'react';
import {Context} from "../store";
import { loginUser } from "../store/actions";

function LogIn(){

    const history = useHistory()
    const handler = () => {
        //Redirect to another route
        history.push("/posts") 
    }

    const [state, dispatch] = useContext(Context)
    console.log(state);


    function itemSubmitHandler(number, data){
        if(number === 1){
            document.getElementById("numbrike").innerHTML = "Õnnestus";
            dispatch(loginUser(data));
            handler();
            //window.location.href = "http://localhost:3000/posts";
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }

    }

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
            <div>
            <h1>Logi Sisse</h1>
            <LogInForm onLogInUser={itemSubmitHandler}/>
            <span id="numbrike"></span>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/register">
                <Button type="primary">Registreerimine</Button>
            </Link>
            </div>

    )
}

export default LogIn;