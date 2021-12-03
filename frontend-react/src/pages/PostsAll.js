import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import Navbar from "../components/Navbar"
import PictureLoaderAll from "../components/PictureLoaderAll"

let postData = []
let i = 0
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("../../image_uploads", false, /.(png|jpe?g|svg|gif)$/));

const images = Object.entries(cache).map(module => module[1].default);

let imageLoad = images.map(image => (
    <img style={{width: 100,height: 100}} src={image} />
))
function Posts(){

const [state, dispatch] = useContext(Context)
const [isLoading, setIsLoading] = useState(true)

  
    useEffect(() =>{
        postData = []
    fetch('http://localhost:8081/api/post/').then(res => {

        return res.json()

    }).then( data => {

        let m = data.length -1
        
        for (m; 0 <= m; m--) {
            console.log(m)
            postData.push({
                key: data[m]._id,
                image: imageLoad[m],
                text: data[m].text,
                firstName: data[m].firstName,
                lastName: data[m].lastName,
                likeAmount: data[m].likeAmount,
                createdAt: data[m].createdAt,
            })
        }
        
        dispatch(updatePosts(data))
        setIsLoading(false)
    
    })

    },[isLoading])

    if(isLoading === true){
        return(
        <div>
            <Navbar/>

            Loading...
        </div>)
    }
   
    return(
        <div>
            <Navbar/>
            <h1>New Gifs Feed</h1>
            <br />
            <PictureLoaderAll />
        </div>
    )
}

export default Posts