import { combineReducers } from 'redux'

const init = {
    id : "",
    username : "",
    error : "",
    success : ""
}


const AuthReducer = (state = init, action) => {
    switch (action.type) {
        case 'BERHASIL_LOGIN':
            return {...state, id: action.payload.id, username: action.payload.username}
            
        case 'AUTH_ERROR':
            return {...state, error: action.payload, success: ''}

        case 'AUTH_SUCCESS':
            return {...state, error: '', success: action.payload}

        case 'ERROR_LOGIN':
            return {...state, error: action.payload}

        case 'NO_MESSAGE':
            return {...state, error: '', success: ''}

       case 'LOGOUT_USER':
            return {...state, ...init} 
            
        default:
            return state
    }
}

export default combineReducers(
    {
        auth:AuthReducer // berisi data init di atas
    }
)