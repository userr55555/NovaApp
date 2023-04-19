import {
    FETCH_IMAGES_FAILURE,
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    SET_SELECTED_IMAGE,
    CLEAR_SELECTED_IMAGE,
  } from '../actions/index';
  
  export function FetchImagesRequest() {
    return { type: FETCH_IMAGES_REQUEST };
  }
  
  export function FetchImagesSuccess(images) {
    return { type: FETCH_IMAGES_SUCCESS, payload: images };
  }
  export function FetchImagesFailure(error) {
    return { type: FETCH_IMAGES_FAILURE, payload: error };
  }
  export function SetSelectedImage(image) {
    return { type: SET_SELECTED_IMAGE, payload: image };
  }
  export function ClearSelectedImage() {
    return { type: CLEAR_SELECTED_IMAGE };
  }
  