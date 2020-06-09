import Axios from "axios";
import store from ".";

export const addProduct = ({
  commit
}, {
  product,
  aantal
}) => {
  commit("ADD_PRODUCT", {
    product,
    aantal,
  });
};
export const BuyProducts = ({
  commit
}) => {
  commit("BUY_PRODUCT");
};

export const removeProduct = ({
  commit
}, {
  product_id: product_id
}) => {
  commit("REMOVEPRODUCT", product_id);
  console.log("removing....");
  console.log(product_id);
  Axios.delete("http://localhost:8095/product/delete/" + product_id, {
      withCredentials: true
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Product remover!"));
};

export const addProductToStore = ({
  commit
}, {
  product_name,
  product_price
}) => {
  commit("ADDPRODUCTTOSTORE", product_name);
  console.log("adding to store....");
  console.log(product_name);
  console.log(product_price);
  Axios.post(
      "http://localhost:8095/product/insertproduct/", {
        productName: product_name,
        productPrice: product_price,
      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    )
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Product added!"));
};

export const loadProducts = ({
  commit
}) => {
  Axios.get("http://localhost:8095/product/getProducts")
    .then((data) => {
      console.log("Producten vanuit rest worden geladen");
      console.log(data.data);
      let posts = data.data;
      commit("SET_PRODUCTS", posts);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Data loaded"));
};

export const registerUser = ({
  commit
}, {
  email,
  password
}) => {
  commit("REGISTERUSER");
  console.log("inserting");
  Axios.post("http://localhost:8095/user/insertuser", {
      name: email,
      password: password,
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("user inserted!"));
};

export const loginUser = async ({
  commit
}, {
  email,
  password
}) => {
  await Axios.post(
      "http://localhost:8095/login", {
        username: email,
        password: password,
      }, {
        withCredentials: true,
      }
    )
    .then((result) => {
      console.log("succes", result);
      if (result.status == 200) {
        console.log("200");
        commit("USERLOGGEDIN", true);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("zitten in finally")

    );
};



export const getUsername = async ({
  commit
}) => {
  console.log("zitten in get username");
  await Axios.get(
    "http://localhost:8095/user/getUsername", {
      withCredentials: true,
    }
  ).then((result) => {
    console.log(result.data);

    commit("SETUSER", result.data);
    //return result.data;
  })
};

export const checkAdminRights = async ({
  commit
}) => {
  //console.log("Check admin rechten");
  await Axios.get("http://localhost:8095/user/isAdmin", {
    withCredentials: true,
  }).then((result) => {
    // console.log(result.data);
    commit("ISADMIN", result.data);

  })
}
export const checkout = async ({
  commit
}) => {
  let productsloaded = store.state.products;
  var productFinal = [];

  //todo fix voor nu met aantal
  productsloaded.forEach(product => {

    productFinal.push(product.product);

  });

  await Axios.post("http://localhost:8095/order/sendOrder", {

      products: productFinal,

    }, {
      withCredentials: true
    }).then((result) => {
      console.log(result);
      commit("CHECKOUT")
    })

    .catch((error) => {
      console.log(error);
    })
}

export const getOrdersUser = async ({
  commit
}) => {
  await Axios.get("http://localhost:8095/order/ordersuser", {
    withCredentials: true,
  }).then((result) => {
    console.log(result.data);
    commit("ORDERSLOADED", result.data);
  })
}