import axios from "axios"
import { ADD_COMMENT, ADD_PRODUCT, DELETE_PRODUCT, DIS_PRODUCT_BUY, DISPLAY_PRODUCTS, ERROR_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCTS_BY_CLIENT_ID, LOAD_PRODUCT, PRODUCT_BUY, PRODUCT_DETAILS, UPDATE_PRODUCT_DISCOUNT_PRICE, UPDATE_PRODUCT_PRICE, UPDATE_RATINGS, UPDATE_REVIEWS, UPDATE_STOCK_QUANTITY } from "../ActionTypes/ProductActionTypes";



export const addProduct =(newProduct)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try{
        const response = await axios.post("http://localhost:8000/api/product/addProduct",newProduct);
        dispatch({
            type:ADD_PRODUCT,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const getProducts=()=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.get("http://localhost:8000/api/product/getProducts");
        dispatch({
            type:GET_PRODUCTS,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const getProductById=(_id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.post(`http://localhost:8000/api/product/getProductById/${_id}`);
        dispatch({
            type:GET_PRODUCT_BY_ID,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const getProductsByClientId=(clientID)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.post("http://localhost:8000/api/product/getProductsByClientId", {clientID});
        dispatch({
            type:GET_PRODUCTS_BY_CLIENT_ID,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.delete(`http://localhost:8000/api/product/deleteProduct/${id}`);
        dispatch({
            type:DELETE_PRODUCT,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const updateProductPrice=(id,price)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`http://localhost:8000/api/product/updatePrice/${id}`,price);
        dispatch({
            type:UPDATE_PRODUCT_PRICE,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const updateDiscountPrice=(id,discountPrice)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`http://localhost:8000/api/product/updateDiscountPrice/${id}`,discountPrice);
        dispatch({
            type:UPDATE_PRODUCT_DISCOUNT_PRICE,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const updateStockQuantity=(id,stockQuantity)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`http://localhost:8000/api/product/updateStockQuantity/${id}`,stockQuantity);
        dispatch({
            type:UPDATE_STOCK_QUANTITY,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const updateRatings=(id,ratings)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`http://localhost:8000/api/product/updateRatings/${id}`,ratings);
        dispatch({
            type:UPDATE_RATINGS,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const updateReviews=(id,reviews)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.put(`http://localhost:8000/api/product/updateReviews/${id}`,reviews);
        dispatch({
            type:UPDATE_REVIEWS,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}


export const addComment=(id,comment)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        const response = await axios.post(`http://localhost:8000/api/product/addComment/${id}`,comment);
        dispatch({
            type:ADD_COMMENT,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const displayProducts=(displayPro)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        dispatch({
            type:DISPLAY_PRODUCTS,
            payload:displayPro
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const productDetails=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        dispatch({
            type:PRODUCT_DETAILS,
            payload:id
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const productBuy=(buy)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        dispatch({
            type:PRODUCT_BUY,
            payload:buy
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}

export const disproductBuy=(disbuy)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT});
    try{
        dispatch({
            type:DIS_PRODUCT_BUY,
            payload:disbuy
        })
    }catch(error){
        dispatch({
            type:ERROR_PRODUCT,
            payload:error
        })
    }
}