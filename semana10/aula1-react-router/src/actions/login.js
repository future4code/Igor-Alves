import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"


export const autenticateLogin = (email, password) => async (dispatch) => {
    const loginInformation = {
        email: email,
        password: password,
    }

    try {
        const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/login`, loginInformation);
        
        const userToken = response.data.token;
        window.localStorage.setItem("token", userToken);
        
        dispatch(push(routes.adminPanel));

    } catch(error) {
        window.alert("Ocorreu um erro ao tentar fazer login!")
    }
}
