import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "http://localhost:5000"

export const setMenuVisible = () => ({
  type: 'SET_MENU_VISIBLE',
  payload: {}
})

export const userSignup = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, form)
    console.log(response)
    const userToken = response.data.token

    window.localStorage.setItem("token", userToken);

    dispatch(push(routes.home))

    window.alert("Cadastro realizado com sucesso! Seja bem vindo ao FutureTube")
  } catch(err) {
    switch(err.message) {
      case 'Request failed with status code 400':
        window.alert("Verifique os campos do formulário")
        break
      case 'Request failed with status code 409':
        window.alert("Usuário já cadastrado")
        break
      default:
        window.alert("Verifique se os campos do formulário estão preenchidos")
        break
    };
  }
}

export const autenticateLogin = (form) => async (dispatch) => {
  try{
    const response = await axios.post(`${baseURL}/login`, form)
    
    const userToken = response.data.token

    window.localStorage.setItem("token", userToken);

    dispatch(push(routes.home))
  }catch(error){
    window.alert("Email ou senha incorreta.")
  }
}

export const userLogout = () => async (dispatch) => {
  window.localStorage.removeItem("token");
  dispatch(push(routes.login))
}