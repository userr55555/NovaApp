import {
  SET_USER,
  SET_BDAY,
  SET_EMAIL,
  SET_PASSWORD,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  SET_SELECTED_IMAGE,
  CLEAR_SELECTED_IMAGE,
} from '../actionTypes/index';

var initialState = {
  user: '',
  bday: '',
  email: '',
  password: '',
  images: [],
  selectedImage: null,
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  if (action.type == SET_USER) {
    return { ...state, user: action.payload };
  } else if (action.type == SET_BDAY) {
    return { ...state, bday: action.payload };
  } else if (action.type == SET_EMAIL) {
    return { ...state, email: action.payload };
  } else if (action.type == SET_PASSWORD) {
    return { ...state, password: action.payload };
  } else if (action.type == FETCH_IMAGES_REQUEST) {
    return { ...state, isLoading: true };
  } else if (action.type == FETCH_IMAGES_SUCCESS) {
    return { ...state, images: action.payload, isLoading: false };
  } else if (action.type == FETCH_IMAGES_FAILURE) {
    return { ...state, error: action.payload, isLoading: false };
  } else if (action.type == SET_SELECTED_IMAGE) {
    return { ...state, selectedImage: action.payload };
  } else if (action.type == CLEAR_SELECTED_IMAGE) {
    return { ...state, selectedImage: null };
  }

  return state;
}
