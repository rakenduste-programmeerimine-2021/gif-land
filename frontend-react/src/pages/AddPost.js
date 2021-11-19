import './Pages.css'
import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import axios from 'axios';
import React, { useState } from 'react';

function AddPost() {
  const [image, setImage] = useState(null);
  const handleClick = () => {
    console.log(image);
    axios.post('http://localhost:4000/image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })
  }
  const handleFileInput = (e) => {
    console.log('handleFileInput working!')
    console.log(e.target.files[0]);
    const formData = new FormData(); 
    formData.append('Meiefailid', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }
  return (
    <div className="App">
      <Navbar/>
      <h1>Image Upload Tutorial</h1>
      <br></br>
      <button onClick={handleClick}>Upload!</button>
      <br></br>
      <br></br>
      <input type="file" onChange={handleFileInput}/>
    </div>
  );
}

export default AddPost