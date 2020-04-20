import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://m7z1d9ye75.execute-api.us-east-1.amazonaws.com/V1";

export const setMenuVisible = () => ({
  type: "SET_MENU_VISIBLE",
  payload: {},
});

export const userSignup = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, form);
    console.log(response);
    const userToken = response.data.token;

    window.localStorage.setItem("token", userToken);

    dispatch(push(routes.home));

    window.alert(
      "Cadastro realizado com sucesso! Seja bem vindo ao FutureTube"
    );
  } catch (err) {
    switch (err.message) {
      case "Request failed with status code 400":
        window.alert("Verifique os campos do formulário");
        break;
      case "Request failed with status code 409":
        window.alert("Usuário já cadastrado");
        break;
      default:
        window.alert("Verifique se os campos do formulário estão preenchidos");
        break;
    }
  }
};

export const autenticateLogin = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/login`, form);

    const userToken = response.data.token;

    window.localStorage.setItem("token", userToken);

    dispatch(push(routes.home));
  } catch (error) {
    console.log("Error: ", error);
    window.alert("Email ou senha incorreta.");
  }
};

export const userLogout = () => async (dispatch) => {
  window.localStorage.removeItem("token");
  dispatch(push(routes.login));
};

export const changePassword = (form) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");

    const axiosConfig = {
      headers: {
        auth: token,
      },
    };

    await axios.post(`${baseURL}/changepassword`, form, axiosConfig);

    window.alert("Senha alterada com sucesso");
  } catch (error) {
    window.alert("Senha antiga incorreta");
  }
};
