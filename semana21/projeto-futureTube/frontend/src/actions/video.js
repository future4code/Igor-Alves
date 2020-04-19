import axios from "axios";

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

export const getUserVideos = () => async (dispatch) => {
  const token =  window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      auth: token
    }
  };

  try {
    const response = await axios.get(`${baseURL}/user/videos`, axiosConfig);

    dispatch(setUserVideos(response.data.userVideos));
  } catch(error) {
    window.alert("Ocorreu um erro ao carregar os seus videos");
  }
}

export const setUserVideos = (userVideos) => ({
  type: 'SET_USER_VIDEOS',
  payload: {
    userVideos,
  }
});

export const deleteUserVideo = (videoId) => async (dispatch) => {
  const token =  window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      auth: token
    }
  };

  const body = {
    videoId: videoId
  }

  try {
    await axios.post(`${baseURL}/video/delete`, body, axiosConfig);

    dispatch(getUserVideos());
  } catch(error) {
    window.alert("Ocorreu um erro ao deletar este video");
  }
}

export const uploadVideo = (form) => async () => {
  const token =  window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      auth: token
    }
  };

  try {
    await axios.post(`${baseURL}/video/upload`, form, axiosConfig);

    window.alert("Video enviado com sucesso");
  } catch(error) {
    window.alert("Ocorreu um erro ao subir este video");
  }
}