export const ADD_PRODUCT = (state, {
    product,
    aantal
}) => {
    var isreplaced = false;
    var testarray = state.products;
    if (testarray.length >= 0) {
        testarray.forEach(element => {

            if (element.product.id == product.id) {
                console.log("is gelijk")
                element.aantal++;
                isreplaced = true;

            }
        });

    }
    if (!isreplaced) {
        state.products.push({
            product,
            aantal
        });
    }
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

export const PRODUCTADDEDSUCCESFUL = (state, value) => {

    state.PRODUCTADDEDSUCCESFUL = value;
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
export const ORDERSLOADED = (state, value) => {
    state.ordersLoaded = value;
}

export const LOGOUTUSER = state => {
    state.currentUser = null;
    state.userLayout = false;
    state.userloggedin = false;
    state.products = [];
    console.log("state aangespast")
}

export const DELETEACCOUNT = state => {
    state.userloggedin = false;
    state.register = false;
    state.currentUser = null;
    state.userLayout = false;
}