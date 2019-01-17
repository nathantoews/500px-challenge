import axios from "axios";

export const getPhotos = (value = { feature: "", page: "1" }) => dispatch => {
  return axios
    .get(`https://api.500px.com/v1/photos`, {
      params: {
        page: value.page,
        feature: value.feature,
        image_size: 600,
        consumer_key: process.env.REACT_APP_CONSUMER_KEY
      }
    })
    .then(response => {
      dispatch({
        type: "UPDATE_GALLERY",
        payload: response.data
      });
    })
    .catch(error => error);
};

export const getSinglePhoto = value => dispatch => {
  return axios
    .get(`https://api.500px.com/v1/photos/${value}`, {
      params: {
        image_size: 4,
        consumer_key: process.env.REACT_APP_CONSUMER_KEY
      }
    })
    .then(response => {
      dispatch({
        type: "UPDATE_IMAGE",
        payload: response.data
      });
    })
    .catch(error => error);
};
