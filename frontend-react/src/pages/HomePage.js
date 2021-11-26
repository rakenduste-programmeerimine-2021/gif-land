import { Link } from 'react-router-dom'
import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import './HomePage.css'
import {useContext} from 'react'
import {Context} from "../store"
import {UserAddOutlined} from '@ant-design/icons'
import {LoginOutlined} from '@ant-design/icons'

function HomePage(){

    const [state] = useContext(Context)
    console.log(state)

    return(
        <div>
            <div class="grid-container">
                <div class="grid-item1">
                    <h1 id="tervitus">Welcome to Gif-Land</h1>
                </div>
                <div class="grid-item2">
                    <img className="avalehelogoke" src="/Gif-file.png" alt="Logo"></img>
                </div>
                <div class="grid-item3">
                    <Link to="/login">
                        <Button type="default" id="avalehenupp1"><LoginOutlined/>Login</Button>
                    </Link>
                </div>
                <div class="grid-item4">
                    <Link to="/register">
                        <Button type="default" id="avalehenupp2"><UserAddOutlined/>Register</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
export default HomePage