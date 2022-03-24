import * as actions from './actionTypes';

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.PRODUCT_ADDED_TO_CART:
            return [
                ...state,
                {
                    id: action.payload.id,
                    price: action.payload.price,
                }
            ];
            case actions.PRODUCT_REMOVED:
            return state.filter(product => product.id !== action.payload.id);
        default:
            return state;
    }
}
