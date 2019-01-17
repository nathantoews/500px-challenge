import { combineReducers } from "redux";

const imageGallery = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_GALLERY":
      return action.payload;
    default:
      return state;
  }
};

const singleImage = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_IMAGE":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  imageGallery,
  singleImage
});

export default rootReducer;
