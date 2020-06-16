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
  console.log(commit);
  // commit("REMOVEPRODUCT", product_id);
  console.log("removing....");
  console.log(product_id);
  Axios.delete("http://localhost:8095/api/v1/product/delete/" + product_id, {
      withCredentials: true,
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("Product removed!"));
};

export const addProductToStore = async ({
  commit
}, {
  product_name,
  product_price
}) => {

  console.log("adding to store....");
  console.log(product_name);
  console.log(product_price);
  await Axios.post(
      "http://localhost:8095/api/v1/product", {
        productName: product_name,
        productPrice: product_price,
      }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    ).then((result) => {
      commit("ADDPRODUCTTOSTORE", product_name)
      commit("PRODUCTADDEDSUCCESFUL", true);
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
      commit("PRODUCTADDEDSUCCESFUL".false);
    })
    .finally(() => console.log("Product added!"));
};

export const loadProducts = ({
  commit
}) => {
  return Axios.get("http://localhost:8095/api/v1/product/getProducts")
    .then((result) => {

      // let posts = result.data;
      if (result.status == 200) {
        commit("SET_PRODUCTS", true);
      } else {
        commit("SET_PRODUCTS", false);
      }
      return result.data;
    })
    .catch((error) => {
      console.log(error);
      commit("SET_PRODUCTS", false);
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
  Axios.post("http://localhost:8095/api/v1/user/insertuser", {
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
      } else {
        ("USERLOGGEDIN", false)
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(console.log("zitten in finally"));
};

export const getUsername = async ({
  commit
}) => {
  console.log("zitten in get username");
  await Axios.get("http://localhost:8095/api/v1/user/getUsername", {
    withCredentials: true,
  }).then((result) => {
    console.log(result.data);

    commit("SETUSER", result.data);
    //return result.data;
  });
};

export const checkAdminRights = async ({
  commit
}) => {
  //console.log("Check admin rechten");
  await Axios.get("http://localhost:8095/api/v1/user/confirmCredentials", {
    withCredentials: true,
  }).then((result) => {
    // console.log(result.data);

    commit("ISADMIN", result.data);
  });
};
export const checkout = async ({
  commit
}) => {
  let productsloaded = store.state.products;
  var productFinal = [];

  productsloaded.forEach((product) => {
    //aantal erbij
    var element = product.product;
    element.count = product.aantal;
    productFinal.push(element);
  });

  await Axios.post(
      "http://localhost:8095/order/sendOrder", {
        products: productFinal,
      }, {
        withCredentials: true,
      }
    )
    .then((result) => {
      console.log(result);
      commit("CHECKOUT");
    })

    .catch((error) => {
      console.log(error);
    });
};

export const getOrdersUser = async ({
  commit
}) => {
  await Axios.get("http://localhost:8095/order/ordersUser", {
    withCredentials: true,
  }).then((result) => {
    console.log(result.data);
    commit("ORDERSLOADED", result.data);
  });
};

export const getDetails = async ({
  commit
}, {
  id
}) => {
  console.log(id);
  console.log(commit)

  return await Axios.get("http://localhost:8095/order/getDetails?id=" + id, {
    withCredentials: true
  }).then((result) => {
    console.log(result.data)
    return result.data;

  }).catch((error) => {
    console.log(error);

  })
}

export const logoutuser = ({
  commit
}) => {
  Axios.get("http://localhost:8095/logout", {
    withCredentials: true
  }).then(
    commit("LOGOUTUSER")
  )

}

export const getAllOrdersPlaced = async ({
  commit
}) => {
  console.log(commit);

  return await Axios.get("http://localhost:8095/order", {
    withCredentials: true
  }).then((result) => {
    console.log(result.data);
    return result.data

  })
}
export const editProduct = async ({
  commit
}, {
  id,
  productName,
  price,
  picture
}) => {
  // console.log(id)
  // console.log(productName)
  // console.log(price)
  // console.log(picture)
  console.log(commit)
  await Axios.put("http://localhost:8095/api/v1/product/edit", {
    id: id,
    productName: productName,
    productPrice: price,
    picture: picture
  }, {
    withCredentials: true
  })
}

export const deleteUser = async ({
  commit
}) => {
  console.log(commit);

  await Axios.delete("http://localhost:8095/api/v1/user", {
    withCredentials: true
  }).then((result) => {
    console.log(result);
    commit("DELETEACCOUNT");
  })
}

export const UpdateUser = async ({
  commit
}, {
  name,
  password
}) => {
  console.log(commit);
  console.log(name);
  console.log(password);
  await Axios.put("http://localhost:8095/api/v1/user", {
    name: name,
    password: password,

  }, {
    withCredentials: true
  })
}

export const DiscountProducts = async ({
  commit
}) => {
  console.log(commit);
  return await Axios.get("http://localhost:8095/api/v1/admin/startDiscount", {
    withCredentials: true
  }).then((result) => {
    console.log(result)
    return result;
  })

}