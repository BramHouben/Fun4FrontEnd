export const ADD_PRODUCT = (state, {
    product,
    aantal
}) => {
    state.products.push({
        product,
        aantal
    });
}

export const BUY_PRODUCT = state => {
    state.products = [];
}
export const SET_PRODUCTS = (state, posts) => {
    state.productsLoaded = posts;
}

export const REGISTERUSER = state => {
    state.register = true;
}

export const REMOVEPRODUCT = (state, id) => {
    let products = state.productsLoaded.filter(p => p.id != id)
    state.productsLoaded = products;
}