import { ADD_COMMENT, ADD_PRODUCT, DELETE_PRODUCT, DIS_PRODUCT_BUY, DISPLAY_PRODUCTS, ERROR_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCTS_BY_CLIENT_ID, LOAD_PRODUCT, PRODUCT_BUY, PRODUCT_DETAILS, UPDATE_PRODUCT_DISCOUNT_PRICE, UPDATE_PRODUCT_PRICE, UPDATE_RATINGS, UPDATE_REVIEWS, UPDATE_STOCK_QUANTITY } from "../ActionTypes/ProductActionTypes";



//initial State
const initialState={
    load:false,
    products:[],
    myProducts:[],
    currentProduct:null,
    displayPro:"",
    productDetail:"",
    buy:[],
    error:null
};

//pure function
const ProductReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOAD_PRODUCT:
            return {...state,load:true}
        case ERROR_PRODUCT:
            return {...state,error:payload,load:false}
        case ADD_PRODUCT:
            return {...state,products:[...state.products,payload.product]}
        case PRODUCT_BUY:
            return {...state,buy:[...state.buy,payload]}
        case DIS_PRODUCT_BUY:
                return {...state,buy: state.buy.filter(item => item.product._id !== payload._id)};            
        case DISPLAY_PRODUCTS:
            return {...state,displayPro:payload}
        case PRODUCT_DETAILS:
            return {...state,productDetail:payload}
        case GET_PRODUCT_BY_ID:
            return {...state,currentProduct:payload.product,load:false}
        case GET_PRODUCTS:
            return {...state,products:payload.products,load:false}
        case GET_PRODUCTS_BY_CLIENT_ID:
            return {...state,myProducts:payload.products,load:false}
        case DELETE_PRODUCT:
            return {...state,load:false,products:payload.products}
        case UPDATE_PRODUCT_PRICE:
            return {...state,load:false,products:payload.products}
        case UPDATE_PRODUCT_DISCOUNT_PRICE:
            return {...state,load:false,products:payload.products}
        case UPDATE_STOCK_QUANTITY:
            return {...state,load:false,products:payload.products}
        case UPDATE_RATINGS:
            return {...state,load:false,products:payload.products}
        case UPDATE_REVIEWS:
            return {...state,load:false,products:payload.products}
        case ADD_COMMENT:
            return {...state,load:false,products:payload.products}
        default:
            return state
    }
}

export default ProductReducer