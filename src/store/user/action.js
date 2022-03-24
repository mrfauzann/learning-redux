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
            name: user.name ? user.name : null,
            address : user.address ? user.address : null,
        }
    }
}