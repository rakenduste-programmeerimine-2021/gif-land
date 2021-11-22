import React, { useEffect, useState } from 'react'
//import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import {Button} from 'antd'

import Navbar from "../components/Navbar"
import {useContext, useRef} from 'react'
import {Context} from "../store"
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../image_uploads", false, /.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map(module => module[1].default);

function Posts(){

    const [state, dispatch] = useContext(Context)

    return(
        <div>
            <Navbar/>
            <Link to="/addPost">
                <Button type="primary">Piltide laadimine</Button>
            </Link>
            <h1>New Gifs Feed</h1>
            {images.map(image => (
                <img style={{width: 100}} src={image} />
            ))}
        </div>
    )

}
export default Posts