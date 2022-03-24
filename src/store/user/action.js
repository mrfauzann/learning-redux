import * as actions from './actionTypes';

/**
 * 
 * @param {name, cartId} user 
 * @returns 
 */
export function userAdded(product = {}){
    return {
        type: actions.USER_ADDED,
        payload: {
            name: userAdded.name ? userAdded.name : null,
            cartId : userAdded.cartId ? userAdded.cartId : null,
        }
    }
}