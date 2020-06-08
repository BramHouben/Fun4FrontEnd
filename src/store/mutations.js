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

export const ADDPRODUCTTOSTORE = (state, name) => {
    // let products = state.productsLoaded.push(p => p.productName != name)
    // state.productsLoaded = products;
    state.lastProductAdded = name;
}

export const SETUSER = (state, user) => {
    state.currentUser = user;

}

export const USERLOGGEDIN = state => {
    state.userloggedin = true;
}

export const ISADMIN = (state, value) => {
    state.isAdmin = value;
    state.userLayout = value;
}
// export const ISLAYOUT = state => {
//     state.userLayout = false;
// }

export const CHECKOUT = status => {
    status.products = [];
}