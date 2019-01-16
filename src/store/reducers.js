import { combineReducers } from "redux";

// const articles = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_ARTICLE":
//       return { ...state, articles: [...state.articles, action.payload] };
//     default:
//       return state;
//   }
// };

const imageGallery = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_GALLERY":
      return action.payload;
    default:
      return state;
  }
};

// const series = (state = [], action) => {
//   switch (action.type) {
//     case "UPDATE_SERIES":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const seriesFull = (state = {}, action) => {
//   switch (action.type) {
//     case "UPDATE_SERIESINFO":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  imageGallery
});

export default rootReducer;
