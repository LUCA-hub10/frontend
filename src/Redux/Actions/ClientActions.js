import axios from "axios"
import { CURRENT_CLIENT, DELETE_CLIENT, ERROR_CLIENT, LOAD_CLIENT, RESET_PASSWORD, RESET_USERNAME, SIGNIN_CLIENT, SIGNOUT_CLIENT, SIGNUP_CLIENT } from "../ActionTypes/ClientActionTypes"


export const signUp=(newClient)=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const response=await axios.post('http://localhost:8000/api/client/signUp',newClient)
        dispatch({
            type:SIGNUP_CLIENT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const signIn=(email,password)=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const response= await axios.post('http://localhost:8000/api/client/signIn',{email,password})
        dispatch({
            type:SIGNIN_CLIENT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const signOut=()=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        dispatch({
            type:SIGNOUT_CLIENT,
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const deleteClient=(_id)=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const response= await axios.delete(`http://localhost:8000/api/client/delete/${_id}`)
        dispatch({
            type:DELETE_CLIENT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const resetPassword=(_id,newPassword)=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const response=await axios.put(`http://localhost:8000/api/client/reset-password/${_id}`,{newPassword})
        dispatch({
            type:RESET_PASSWORD,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const resetUserName=(_id,userName)=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const response=await axios.put(`http://localhost:8000/api/client/reset-userName/${_id}`,{userName})
        dispatch({
            type:RESET_USERNAME,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}

export const current=()=>async(dispatch)=>{
    dispatch({type:LOAD_CLIENT})
    try {
        const config = {
            headers: {authorization: localStorage.getItem('token')}
        }
        const response=await axios.post("http://localhost:8000/api/client/current",config)
        dispatch({
            type:CURRENT_CLIENT,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_CLIENT,
            payload:error
        })
    }
}