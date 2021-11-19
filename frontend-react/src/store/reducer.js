import { POST_ADD, POST_REMOVE, USER_LOGIN, USER_LOGOUT } from "./actions";

const postReducer = (state, action) => {
    switch(action.type){
        case POST_ADD:
            return{
                ...state,
                //concat liida juurde
                data: state.data.concat(action.payload)
            };
        case POST_REMOVE:
            return{
                // ...state kaotab state ymbrise 2ra ja votab state propertid ja paneb nad uhele tasandile
                ...state,
                data: state.data.filter(post => post.id !== action.payload)
            };
            //kodutoona uue listi vastu votmine maybe
        case "POSTS_UPDATE":
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

const authReducer = (state, action) => {
    switch(action.type){
        case USER_LOGIN:
            return{
                ...state,
                token: action.payload.token,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        case  USER_LOGOUT:
            return{
                ...state,
                token: null,
                firstName: null,
                lastName: null
            }
        default:
            return state
    }
}

export {postReducer, authReducer};