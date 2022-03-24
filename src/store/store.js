import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducer from "./product/reducer"; //"./store/product/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const store = configureStore(
    reducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    devToolsEnhancer({trace: true})   
);

export default store;