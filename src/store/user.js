import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = {
    lists: []
};

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        apiProductsRequestSucceeded: (products, action) => {
            products.lists = action.payload;
        },
        apiProductsRequestFailed: (products, action) => {

        },
        userAdded: (products, action) => {
            products.lists.push({
                id: ++lastId,
                name: action.payload.name,
                address: action.payload.address,
            });
        },
    }
});

export const { userAdded } = slice.actions;
export default slice.reducer;