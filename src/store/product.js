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
        productAdded: (products, action) => {
            products.lists.push({
                id: ++lastId,
                name: action.payload.name,
                price: action.payload.price,
                hasDiscount: false,
            });
        },
        productMarkAsDiscount: (products, action) => {
            const index = products.lists.findIndex(product => product.id === action.payload.id);
            if(index > -1) {
                products[index].hasDiscount = action.payload.hasDiscount;
            }
        }

    }
});

export const { productAdded, productMarkAsDiscount } = slice.actions;
export default slice.reducer;
