import * as actions from './actionTypes';

let lastId = 0;
const initialState = [];

export default function reducer(state = initialState, action){
    switch (action.type) {
        case actions.USER_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    name: action.payload.name,
                    address: action.payload.address,
                }
            ];
        default:
            return state;
    }
}