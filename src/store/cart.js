import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        productAddedToCart: (cart, action) => {
            cart.push({
                id: action.payload.id,
                price: action.payload.price,
            });
        }        
    },
    productRemovedToCart: (cart, action) => {
        cart.push({
            id: action.payload.id,
        });
    }
});

export const { productAddedToCart } = slice.actions;
export default slice.reducer;