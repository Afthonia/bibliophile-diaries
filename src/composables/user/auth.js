import axios from "axios";
import { ref } from "vue";

const BASE_URL = "api/user/";

const login = async (email, password) => {
  const error = ref(null);

  try {
    return axios
      .post(BASE_URL + "login", {
        headers: {
          "Content-Type": "application/json",
        },
        email: email,
        password: password,
      })
      .then((resp) => {
        if (resp.data.token) {
          localStorage.setItem("user", JSON.stringify(resp.data));
          console.log(resp.data);
          return JSON.stringify(resp.data);
        } else {
          return {};
        }
      });
  } catch (err) {
    error.value = err;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const register = async (username, email, password) => {
  const error = ref(null);

  try {
    return axios
      .post(BASE_URL + "register", {
        headers: {
          "Content-Type": "application/json",
        },
        name: username,
        email: email,
        password: password,
      })
      .then((resp) => {
        if (resp.data.token) {
          localStorage.setItem("user", JSON.stringify(resp.data));
          
        } else {
          throw "Registration Failed";
        }
      });
  } catch (err) {
    error.value = err;
  }
};

export { login, logout, register };
