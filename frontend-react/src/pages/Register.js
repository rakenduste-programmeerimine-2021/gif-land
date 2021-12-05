import RegisterForm from "../components/RegisterForm"
import './Register.css'
import { Link } from 'react-router-dom'
import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import {UserAddOutlined} from '@ant-design/icons'

function Register(){

    function itemSubmitHandler(number){
        if(number === 1){
            document.getElementById("numbrike").innerHTML = "Õnnestus";
        }else{
            document.getElementById("numbrike").innerHTML = "Failed";
        }
    }

    return(
        <div className="grid-container">
            <div className="grid-item1">
                <h1 id="tervitus">Register</h1>
            </div>
            <RegisterForm onAddUser={itemSubmitHandler}/>
            <div className="grid-item">
                <Link to="/login">
                    <Button type="default" id="regalehenupp2"><UserAddOutlined/>Login</Button>
                </Link>
            </div>
            <div className="grid-item">
                <span id="numbrike"></span>
            </div>
        </div>
    )
}

export default Register