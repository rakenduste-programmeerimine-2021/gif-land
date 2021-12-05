import LogInForm from "../components/LogInForm";
import './Login.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom";
import { useContext } from 'react';
import { Context } from "../store";
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
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }

    }

    return(
       
        <div class="grid-container">
            <div class="grid-item1">
                <h1 id="tervitus">Login</h1>
            </div>
            <LogInForm onLogInUser={itemSubmitHandler}/>
            <div class="grid-item">
                <Link to="/register">
                    <Button type="default" id="loginlehenupp2"><UserAddOutlined/>Register</Button>
                </Link>
            </div>
            <div class="grid-item">
            <span id="numbrike"></span>
            </div>
        </div>

    )
}

export default LogIn