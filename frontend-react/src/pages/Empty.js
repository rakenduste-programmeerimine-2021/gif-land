import {useContext} from 'react';
import {Context} from "../store";
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";

function Empty(){

    const [state] = useContext(Context)
    const history = useHistory()
    const handler = () => {
      //Redirect to another route
      history.push("/posts") 
    }
    
    if (!state.auth.token) {
      handler();
    }

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

export default Empty;