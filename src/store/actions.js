import Axios from "axios";

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
  Axios.delete("http://localhost:8095/product/delete/" + product_id)
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
  Axios.post("http://localhost:8095/product/insertproduct/", {
      productName: product_name,
      productPrice: product_price,
    })
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

  await Axios.post("http://localhost:8095/login", {
    username: email,
    password: password,
  }, {
    withCredentials: true
  }).then(result => {
    console.log("succes", result),
      // console.log(result.headers['authorization']);
      commit("SETUSER", result);
  }).catch((error) => {
    console.log(error);
  }).finally(
    console.log("zitten in finally"),

  );



}