import {useContext} from 'react'
import {Context} from "../store"
import Navbar from "../components/Navbar"
import AddPostForm from '../components/AddPostForm';



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
      <h1>Image Upload</h1>

      <AddPostForm onPictureUpload={itemSubmitHandler}/>
      <br></br>
      <span id="numbrike"></span>
      <br></br>
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