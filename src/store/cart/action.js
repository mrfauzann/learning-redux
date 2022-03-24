import * as actions from './actionTypes';

/**
 * 
 * @param {id, name} cart 
 * @returns 
 */
export function productAddedToCart(product = {}){
    return {
        type: actions.PRODUCT_ADDED_TO_CART,
        payload: {
            name: cart.name ? cart.name : null,
        }
    }
}

/**
 * @param { id} params
 * @returns
 */
 export const productMarkAsDiscount = params => ({
    type: actions.PRODUCT_MARK_AS_DISCOUNT,
    payload: {
        id : params.id,
        hasDiscount: params.hasDiscount
    }
});