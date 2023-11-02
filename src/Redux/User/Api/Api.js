import axios from "axios";
import { BASE_URL, CARD_DELETE_API, CARD_GET_API, CARD_POST_API, DELETE_USER_API, GET_USER_API } from "../../Constant";

// get Axios Api
export function GetUserAxios() {
  return axios.get(BASE_URL + GET_USER_API).then((res) => {
    const data = res.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}
// post data in api 
export function PostUserAxios(action) {
  return axios.post(BASE_URL + GET_USER_API, action.payload).then((res) => {
    const data = res.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}
// delete data in api
export function DeleteUserAxios(action) {
  return axios.delete(BASE_URL + DELETE_USER_API + action.payload).then((res) => {
    const data = action.payload 
    const status = res.status
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}

// Card Post data in api 
export function CardPostUserAxios(action) {
  return axios.post(BASE_URL + CARD_POST_API, action.payload).then((res) => {
    const data = res.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}

// Card Get data in api 
export function CardGetUserAxios(action) {
  return axios.get(BASE_URL + CARD_GET_API).then((res) => {
    const data = res.data;
    const status = res.status;
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}

// Card Delete data in api 
export function CardDeleteUserAxios(action) {
  return axios.delete(BASE_URL + CARD_DELETE_API+action.payload).then((res) => {
    const data = action.payload;
    const status = res.status;
    console.log(res);
    return {
      data,
      status
    }
  }).catch((error) => console.log(error))
}