export const PRODUCT_ADDED = "productAdded";
export const PRODUCT_REMOVED = "productRemoved";
export const PRODUCT_MARK_AS_DISCOUNT = "productMarkAsDiscount";

//import * as actions from './actionTypes';

/**
 * 
 * @param {name, price, hasDiscount} product 
 * @returns 
 */
export function productAdded(product = {}){
    return {
        type: actions.PRODUCT_ADDED,
        payload: {
            name: product.name ? product.name : null,
            price: product.price ? product.price : null,
            hasDiscount: product.hasDiscount ? true : false
        }
    }
}

/**
 * @param { id, hasDiscount } params
 * @returns
 */
 export const productMarkAsDiscount = params => ({
    type: actions.PRODUCT_MARK_AS_DISCOUNT,
    payload: {
        id : params.id,
        hasDiscount: params.hasDiscount
    }
});


let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.PRODUCT_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    price: action.payload.price,
                    hasDiscount: actions.payload.hasDiscount,
                }
            ];
        case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);
        case actions.PRODUCT_MARK_AS_DISCOUNT:
            return state.map(product => 
                product.id !== action.payload.id ? 
                product : {
                    ...product,
                    hasDiscount: action.payload.hasDiscount
                });
        default:
            return state;
    }
}