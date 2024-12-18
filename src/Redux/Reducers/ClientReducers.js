import { toast } from "react-toastify";
import { CURRENT_CLIENT, DELETE_CLIENT, ERROR_CLIENT, LOAD_CLIENT, RESET_PASSWORD, RESET_USERNAME, SIGNIN_CLIENT, SIGNOUT_CLIENT, SIGNUP_CLIENT } from "../ActionTypes/ClientActionTypes";


const initialState={
    load:false,
    client:null,
    error:null
}


const ClientReducers=(state=initialState,{type,payload})=>{

    switch (type) {
        case LOAD_CLIENT:
            return{...state,load:true}
        case SIGNIN_CLIENT:
            localStorage.setItem("token",payload.token)
            toast(payload.msg);
            return{...state,client:payload.foundClient,load:false}
        case SIGNOUT_CLIENT:
            localStorage.removeItem("token")
            toast("SignOut successfully")
            return{...state,client:null,load:false}
        case SIGNUP_CLIENT:
            localStorage.setItem("token",payload.token)
            return{...state,load:false,client:payload.newClient}
        case DELETE_CLIENT:
            localStorage.removeItem("token")
            return{...state,client:null,load:false}
        case RESET_PASSWORD:
            return{...state,load:false}
        case RESET_USERNAME:
                return{...state,load:false}
        case ERROR_CLIENT:
            return{...state,error:payload,load:false}
        case CURRENT_CLIENT:
            return{...state,load:false,client:payload}
        default:
            return state
    }
}

export default ClientReducers
