import Navbar from "../components/Navbar"
import PictureLoader from "../components/PictureLoader"
import './Posts.css'

function Posts(){
 
    return(
        <div className = "picturePosts">
            <Navbar/>
            <h1 id="tervitus">News Feed</h1>
            <br />
            <PictureLoader />
        </div>
    )
}

export default Posts