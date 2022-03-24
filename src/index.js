import store from "./store/store";
import { productAdded, productMarkAsDiscount} from './store/product';
import cart from "./store/cart";
import { productAddedToCart } from "./store/cart";

store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

// store.dispatch(productAdded({
//     name :"Product 1",
//     price: 1500,
// }))

// store.dispactch(productAddedToCart({
//     id:1,
//     name:'Product 1',
// }))

store.dispatch({
    type: 'apiRequest', //3.1 Create Action Creators
    payload: {
        url: '/products',
        method: 'get'
    }
});

// store.dispatch(productAdded({
//     name :"Product 2",
//     price: 100,
// }))

// store.dispatch(productAdded({
//     name :"Product 3",
//     price: 100,
// }))

// store.dispatch(productMarkAsDiscount({
//     id: 3,
//     hasDiscount: true
// }))