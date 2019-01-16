import axios from "axios";

export const getPhotos = value => dispatch => {
  return axios
    .get(`https://api.500px.com/v1/photos`, {
      params: {
        feature: value,
        consumer_key: process.env.REACT_APP_CONSUMER_KEY
      }
    })
    .then(response => {
      dispatch({
        type: "UPDATE_GALLERY",
        payload: response.data.photos
      });
    })
    .catch(error => error);
};