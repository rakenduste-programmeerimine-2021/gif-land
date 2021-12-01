import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import AddPostForm from '../components/AddPostForm';
import './AddPost.css'


function AddPost() {
  const [state] = useContext(Context)
  console.log(state);

  function itemSubmitHandler(number){
    if(number === 1){
      document.getElementById("numbrike").innerHTML = "Õnnestus";
    }else{
      document.getElementById("numbrike").innerHTML = "Failed";
    }

  }

  return (
    <div className="App">
      <Navbar/>
      <div className="grid-container">
        <div className="grid-item1">
          <h1 id="tervitus">Image Upload</h1>
        </div>
        <div className="grid-item1">
          <AddPostForm onPictureUpload={itemSubmitHandler}/>
        </div>
        <br></br>
        <div className="grid-item1">
          <span id="numbrike"></span>
        </div>
      </div>
    </div>
  );
}

export default AddPost