import {
  CARD_USER_DELETE_ERROR,
  CARD_USER_DELETE_PROGRESS,
  CARD_USER_DELETE_SUCCESS,
  CARD_USER_GET_ERROR,
  CARD_USER_GET_PROGRESS,
  CARD_USER_GET_SUCCESS,
  CARD_USER_POST_ERROR,
  CARD_USER_POST_PROGRESS,
  CARD_USER_POST_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_PROGRESS,
  DELETE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_PROGRESS,
  GET_USER_SUCCESS,
  POST_USER_ERROR,
  POST_USER_PROGRESS,
  POST_USER_SUCCESS
} from "../Action/Action";


const initialState = {
  User: [],
  Card: [],

  GetUserProgress: false,
  GetUserError: null,

  PostUserProgress: false,
  PostUserError: null,

  DeleteUserProgress: false,
  DeleteUserError: null,

  CardPostProgress: false,
  CardPostError: null,

  CardGetProgress: false,
  CardGetError: null,

  DataIsLoaded: false
}

function UserReducer(State = initialState, action) {
  switch (action.type) {
    //Get User ActionInManage;
    case GET_USER_PROGRESS:
      return {
        ...State,
        GetUserProgress: true,
      }
    case GET_USER_ERROR:
      return {
        ...State,
        GetUserError: action.data
      }
    case GET_USER_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        User: action.data
      }

    //Get User ActionInManage;
    case POST_USER_PROGRESS:
      return {
        ...State,
        PostUserProgress: true,
      }
    case POST_USER_ERROR:
      return {
        ...State,
        PostUserError: action.data
      }
    case POST_USER_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        User: State.User.concat(action.data)
      }

    //Delete User ActionInManage;
    case DELETE_USER_PROGRESS:
      return {
        ...State,
        DeleteUserProgress: true,
      }
    case DELETE_USER_ERROR:
      return {
        ...State,
        DeleteUserError: action.data
      }
    case DELETE_USER_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        User: State.User.filter((data) => data.id !== action.data)
      }

    //Card Post User ActionInManage;
    case CARD_USER_GET_PROGRESS:
      return {
        ...State,
        CardGetProgress: true,
      }
    case CARD_USER_GET_ERROR:
      return {
        ...State,
        CardGetError: action.data
      }
    case CARD_USER_GET_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        Card: action.data
      }

    //Card Post User ActionInManage;
    case CARD_USER_POST_PROGRESS:
      return {
        ...State,
        CardPostProgress: true,
      }
    case CARD_USER_POST_ERROR:
      return {
        ...State,
        CardPostError: action.data
      }
    case CARD_USER_POST_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        Card: State.Card.concat(action.data)
      }

    //Card Post User ActionInManage;
    case CARD_USER_DELETE_PROGRESS:
      return {
        ...State,
        CardPostProgress: true,
      }
    case CARD_USER_DELETE_ERROR:
      return {
        ...State,
        CardPostError: action.data
      }
    case CARD_USER_DELETE_SUCCESS:
      return {
        ...State,
        DataIsLoaded: true,
        Card: State.Card.filter((data) => data.id !== action.data)
      }
    default: return State;
  }
}
export default UserReducer;