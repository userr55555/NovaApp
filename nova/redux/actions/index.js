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
  
  export const Set_User = (user) => {
    return {
      type: SET_USER,
      payload: user,
    };
  };
  
  export function Set_Bday(bday) {
    return {
      type: SET_BDAY,
      payload: bday,
    };
  }
  
  export function Set_Email(email) {
    return {
      type: SET_EMAIL,
      payload: email,
    };
  }
  
  export function Set_Password(password) {
    return {
      type: SET_PASSWORD,
      payload: password,
    };
  }
  
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
  