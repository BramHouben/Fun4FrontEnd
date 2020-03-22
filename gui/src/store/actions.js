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