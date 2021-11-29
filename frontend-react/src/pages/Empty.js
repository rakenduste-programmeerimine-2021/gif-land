import {useContext} from 'react';
import {Context} from "../store";
function ProfilePage(){

    const [state, dispatch] = useContext(Context)

    return(
        // loon formi teisel js failis kus tekitame sisestusest json objetki
        <div class="grid-container">

            <h1 id="tervitus">Something went wrong</h1>
        </div>

    )
}

export default ProfilePage;