export const addProduct = ({
    commit
}, {
    product,
    aantal
}) => {
    commit('ADD_PRODUCT', {
        product,
        aantal
    });
}
export const BuyProducts = ({
    commit
}) => {
    commit('BUY_PRODUCT');
}