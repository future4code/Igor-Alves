import axios from "axios";
// import { push } from "connected-react-router";
// import { routes } from "../containers/Router";

const baseURL = "http://localhost:5000"

export const getAllVideos = (page) => async (dispatch) => {
  const token =  window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      auth: token
    }
  };

  const body = {
    page: page
  }
 
  try {
    const response = await axios.post(`${baseURL}/video/all`, body, axiosConfig);
    console.log(response)
    dispatch(setAllVideos(response.data.allVideos));
  } catch(error) {
    window.alert("Ocorreu um erro ao carregar os videos.");
  }
}

export const setAllVideos = (allVideos) => ({
  type: 'SET_ALL_VIDEOS',
  payload: {
    allVideos,
  }
});