import { useHistory } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../store"
import Navbar from "../components/Navbar"
import ProfilePictureLoader from "../components/ProfilePictureLoader"

function ProfilePage(){

    const [state] = useContext(Context)
    const history = useHistory()
    const handler = () => {
        history.push("/postsAll") 
    }

    if (!state.auth.token) {
        handler();
    }
   
    return(
        <div>
            <Navbar/>
            <h1 id="tervitus">Profile page</h1>
            <br />
            <ProfilePictureLoader/>
        </div>
    )
}

export default ProfilePage