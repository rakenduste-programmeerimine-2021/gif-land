import { useHistory } from "react-router-dom";
import {useState, useContext, useEffect} from "react"
import {Context} from "../store"
import {updatePosts} from "../store/actions"
import Navbar from "../components/Navbar"
import ProfilePictureLoader from "../components/ProfilePictureLoader"

const postData = []
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
function ProfilePage(){

    const [state, dispatch] = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)

    const history = useHistory()
    const handler = () => {
        //Redirect to another route
        history.push("/posts") 
    }

    if (!state.auth.token) {
        handler();
    }
  
    useEffect(() =>{
        fetch('http://localhost:8081/api/post/').then(res => {

            return res.json()

        }).then( data => {


            for (i; i < data.length; i++) {

                postData.push({
                  key: data[i]._id,
                  file: imageLoad,
                  text: data[i].text,
                  firstName: data[i].firstName,
                  lastName: data[i].lastName,
                  createdAt: data[i].createdAt,
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
            <h1>Tere Tulemast Profiililehele</h1>
            <br />
            <ProfilePictureLoader />
        </div>
    )
}

export default ProfilePage