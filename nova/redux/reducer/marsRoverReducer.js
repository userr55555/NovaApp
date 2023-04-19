import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    SET_SELECTED_IMAGE,
    CLEAR_SELECTED_IMAGE,
  } from '../actions/index';
  
  const initialState = {
    images: [],
    selectedImage: null,
    isLoading: false,
    error: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_IMAGES_REQUEST:
        return { ...state, isLoading: true };
      case FETCH_IMAGES_SUCCESS:
        return { ...state, images: action.payload, isLoading: false };
      case FETCH_IMAGES_FAILURE:
        return { ...state, error: action.payload, isLoading: false };
      case SET_SELECTED_IMAGE:
        return { ...state, selectedImage: action.payload };
      case CLEAR_SELECTED_IMAGE:
        return { ...state, selectedImage: null };
      default:
        return state;
    }
  };
  
  export default reducer;