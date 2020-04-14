import Axios from "axios";

export const addProduct = ({
    commit
}, {
    product,
    aantal
}) => {
    commit("ADD_PRODUCT", {
        product,
        aantal
    });
};
export const BuyProducts = ({
    commit
}) => {
    commit("BUY_PRODUCT");
};

export const loadProducts = ({
    commit
}) => {
    Axios.get("http://localhost:8075/api/v1/user")
        .then(data => {
            console.log("Producten vanuit rest worden geladen");
            console.log(data.data);
            let posts = data.data;
            commit("SET_PRODUCTS", posts);
        })
        .catch(error => {
            console.log(error);
        });
};