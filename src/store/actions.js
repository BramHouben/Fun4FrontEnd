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

export const loadProducts = ({
  commit
}) => {
  Axios.get("http://localhost:8095/api/v1/product")
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
  commit(
    "REGISTERUSER"
  );
  console.log("inserting")
  Axios.post("http://localhost:8095/user/insertuser", {
    name: email,
    password: password
  }).catch((error) => {
    console.log(error);
  }).finally(() => console.log("user inserted!"))

};