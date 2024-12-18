import { combineReducers } from "redux";
import ClientReducers from "./ClientReducers";
import ProductReducer from "./ProductReducer";


const rootReducer = combineReducers(
    {ClientReducers,
    ProductReducer
    });

export default rootReducer;
