import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const baseURL = "https://m7z1d9ye75.execute-api.us-east-1.amazonaws.com/V1";

export const getAllVideos = (page) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    page: page,
  };

  try {
    const response = await axios.post(
      `${baseURL}/video/all`,
      body,
      axiosConfig
    );

    dispatch(setAllVideos(response.data.allVideos));
  } catch (error) {
    window.alert("Ocorreu um erro ao carregar os videos.");
  }
};

export const setAllVideos = (allVideos) => ({
  type: "SET_ALL_VIDEOS",
  payload: {
    allVideos,
  },
});

export const getUserVideos = () => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios.get(`${baseURL}/user/videos`, axiosConfig);

    dispatch(setUserVideos(response.data.userVideos));
  } catch (error) {
    window.alert("Ocorreu um erro ao carregar os seus videos");
  }
};

export const setUserVideos = (userVideos) => ({
  type: "SET_USER_VIDEOS",
  payload: {
    userVideos,
  },
});

export const deleteUserVideo = (videoId) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    videoId: videoId,
  };

  try {
    await axios.post(`${baseURL}/video/delete`, body, axiosConfig);

    dispatch(getUserVideos());
  } catch (error) {
    window.alert("Ocorreu um erro ao deletar este video");
  }
};

export const uploadVideo = (form) => async () => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  try {
    await axios.post(`${baseURL}/video/upload`, form, axiosConfig);

    window.alert("Video enviado com sucesso");
  } catch (error) {
    window.alert("Ocorreu um erro ao subir este video");
  }
};

export const getVideoDetails = (videoId) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    videoId,
  };

  try {
    const response = await axios.post(
      `${baseURL}/video/details`,
      body,
      axiosConfig
    );

    dispatch(setVideoDetais(response.data.videoDetails));
    dispatch(push(routes.videoDetails));
  } catch (error) {
    window.alert("Ocorreu um erro ao carregar os pegar os dados deste video");
  }
};

export const setVideoDetais = (videoDetails) => ({
  type: "SET_VIDEO_DETAILS",
  payload: {
    videoDetails,
  },
});

export const updateVideoInfo = (videoId, form) => async (dispatch) => {
  const token = window.localStorage.getItem("token");

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };

  const body = {
    videoId,
    title: form.title,
    description: form.description,
  };

  try {
    await axios.post(`${baseURL}/video/update`, body, axiosConfig);

    dispatch(getUserVideos());

    window.alert("Titulo e descrição atualizados com sucesso.");
  } catch (error) {
    window.alert("Ocorreu um erro ao atualizar os dados deste video");
  }
};
