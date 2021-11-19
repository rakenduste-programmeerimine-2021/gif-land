import React, { useEffect, useState } from 'react'
//import ReactDOM from 'react-dom'
import Navbar from "../components/Navbar"
import {useContext, useRef} from 'react'
import {Context} from "../store"

function Posts(){

    const [state, dispatch] = useContext(Context)

    return(
        <div>
            <Navbar/>
            <h1>New Gifs Feed</h1>
            <img src="testgif.gif"></img>
            <span>Mina olen esimene gif</span>
            <br></br>
            <br></br>
            <img src="testgif.gif"></img>
            <span>Mina olen teine gif</span>

        </div>
    )
}
export default Posts