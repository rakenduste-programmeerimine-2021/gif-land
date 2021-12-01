import {useContext} from 'react';
import {Context} from "../store";
import Navbar from "../components/Navbar"

function ProfilePage(){

    const [state, dispatch] = useContext(Context)

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div>
            <Navbar/>
            <div class="grid-container">

                <h1 id="tervitus">Something went wrong</h1>
            </div>
        </div>
    )
}

export default ProfilePage;