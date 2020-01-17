import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"
import { getTripDetail } from "./trips"

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


export const applicateUser = (form) => async (dispatch) => {
    const formData = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country,
    }

    try {
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips/${form.tripId}/apply`, formData)

        window.alert("Sua inscrição foi realizada com sucesso!")
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar aplicar para a viagem.")
    }
}


export const approveCandidate = (tripId, candidateId, response) => async (dispatch) => {
    const config = {
        headers:{
            'auth': window.localStorage.getItem("token")
        }
    }

    const data = {
        approve: response
    }
    
    try {
        await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips/${tripId}/candidates/${candidateId}/decide`, data, config)

        dispatch(getTripDetail(tripId))
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar aprovar candidato.")
    }
}