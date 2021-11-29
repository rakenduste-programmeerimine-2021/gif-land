import axios from 'axios';
import React, { useState } from 'react';

import 'antd/dist/antd.css';
let kell;

function AddPostForm(props){

    const [image, setImage] = useState(null);
    const handleClick = () => {
        try{
            console.log(kell);
            console.log(image);
            axios.post('http://localhost:5000/image-upload', image)
            .then(res => {
                console.log('Axios response: ', res)
            }).then(function (response) {
                // handle success
                TryToUpload();
                console.log(response);
            }).catch(function (error) {
                // handle error
                console.log(error);
                props.onPictureUpload(0);
            });
      
        }catch (error) {
            console.error(error)
        }
    }
    const handleFileInput = (e) => {

        
      console.log('handleFileInput working!')
      console.log(e.target.files[0]);
      var b = document.getElementById('fileLabel');
      b.innerHTML = e.target.files[0].name;
      const formData = new FormData();
      kell = Date.now();
      console.log(kell.toString());
      //kirjutan MONGOSSE PILDI KIRJELDUSED ja siis saadan failile ID vastavalt kuup2evale
      formData.append('Pic', e.target.files[0], kell.toString());
      console.log(formData);
      setImage(formData);
    }


    function TryToUpload(){
        console.log(document.getElementById("Desc_input").value);
        let descpritiontext = document.getElementById("Desc_input").value;
        if(descpritiontext.length < 1){
            props.onPictureUpload(0);
        }else{
            let firstNameVariable = "Jan";
            let lastNameVariable = "Laan";
            let filenameVariable = 'Pic_' + kell.toString();
            const Post= {
                filename: filenameVariable,
                text: descpritiontext,
                firstName: firstNameVariable,
                lastName: lastNameVariable
            };
            onFinish(Post);
        }
        
    }

    const onFinish = (values) => {
        console.log('Success:', values)
        try{
            fetch('http://localhost:8081/api/post/create', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {'Content-Type':'application/json'}
            }).then(response => response.json())
            
            props.onPictureUpload(1);


        }catch (error) {
            console.error(error)
            props.onPictureUpload(0);
        }
    }



    //<input type="file" id="aa" onChange={handleFileInput}/>


    return(
        <div>
            <textarea id="Desc_input"  rows="2" cols="40" placeholder="Description"/>

            <div className="file-input">
                <input type="file" id="file" className="file" onChange={handleFileInput}/>
                <label htmlFor="file">Select file</label>
            </div>
            <label id="fileLabel"></label>
            <br></br>
            <button className="uploadButton" onClick={handleClick}>Upload!</button>
        </div>
    )
}

export default AddPostForm