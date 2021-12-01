import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import AddPostForm from '../components/AddPostForm';
import './AddPost.css'
import { useHistory } from "react-router-dom";



function AddPost() {
  const [state] = useContext(Context)
  console.log(state);

  const history = useHistory()
  const handler = () => {
    //Redirect to another route
    history.push("/posts") 
  }
  
  if (!state.auth.token) {
    handler();
  }

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




/*import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import AddPostForm from '../components/AddPostForm';
import FileUpload from '../components/FileUpload';
function AddPost(){
  return(
  <div className="App">
    <Navbar/>
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react' /> React File Upload
      </h4>
      <FileUpload />
    </div>
  </div>
);
}
export default AddPost;*/