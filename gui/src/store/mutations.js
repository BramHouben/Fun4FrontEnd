export const ADD_PRODUCT = (state, {
    product,
    aantal
}) => {
    state.products.push({
        product,
        aantal
    });
}