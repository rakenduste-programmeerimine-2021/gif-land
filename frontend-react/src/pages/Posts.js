import {useContext} from "react"
import {Context} from "../store"
import Navbar from "../components/Navbar"
import PictureLoader from "../components/PictureLoader"
import { useHistory } from "react-router-dom";
import './Posts.css'

function Posts(){
    const history = useHistory()
    const [state] = useContext(Context)
    
    const handler = () => {
        //Redirect to another route
        history.push("/postsAll") 
    }

    if (!state.auth.token) {
        handler();
    }
   
    return(
        <div>
            <Navbar/>
            <h1 id="tervitus">New Gifs Feed</h1>
            <br/>
            <PictureLoader />
        </div>
    )
}

export default Posts