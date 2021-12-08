import {useContext} from 'react';
import {Context} from "../store";
import Navbar from "../components/Navbar"
import { useHistory } from "react-router-dom";

function Empty(){

    const [state] = useContext(Context)

    const history = useHistory()
    const handler = () => {
      history.push("/posts") 
    }
    
    if (!state.auth.token) {
      handler();
    }

    return(
        
        <div>
            <Navbar/>
            <div class="grid-container">
                <h1 id="tervitus">Something went wrong</h1>
            </div>
        </div>
    )
}

export default Empty;