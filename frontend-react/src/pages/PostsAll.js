import Navbar from "../components/Navbar"
import PictureLoaderAll from "../components/PictureLoaderAll"

function Posts(){

    return(
        <div>
            <Navbar/>
            <h1 id="tervitus">New Gifs Feed</h1>
            <br />
            <PictureLoaderAll />
        </div>
    )
}

export default Posts