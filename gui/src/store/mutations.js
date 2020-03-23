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