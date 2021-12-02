import { createContext, useReducer } from "react";
import { postReducer, authReducer } from "./reducer";
import combineReducers from "react-combine-reducers";

const initalPosts = {
    data: []

}

const initalAuth = {
    token: null,
    firstName: null,
    lastName: null,
}

const [combinedReducer, initialState] = combineReducers({
    posts: [postReducer, initalPosts],
    auth: [authReducer, initalAuth]
})

export const Context = createContext(initialState)

function Store({children}){
    const [state, dispatch] = useReducer(combinedReducer, initialState)

    return (
        <Context.Provider value={[ state, dispatch ]}>
            {children}
        </Context.Provider>
    )
}

export default Store