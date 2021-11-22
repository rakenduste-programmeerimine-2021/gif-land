import { Link } from 'react-router-dom'
import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import './Pages.css'
import {useContext} from 'react'
import {Context} from "../store"
import {UserAddOutlined} from '@ant-design/icons'
import {LoginOutlined} from '@ant-design/icons'

function HomePage(){

    const [state, dispatch] = useContext(Context)
    console.log(state)

    return(
        <div>
            <h1>Welcome to Gif-Land</h1>
            <img className="avalehelogoke" src="/Gif-file.png" alt="Logo"></img>
            <br />
            <Link to="/login">
                <Button type="default" id="avalehenupp"><LoginOutlined/>Login</Button>
            </Link>
            <br />
            <Link to="/register">
                <Button type="default" id="avalehenupp"><UserAddOutlined/>Register</Button>
            </Link>

        </div>
    )
}
export default HomePage