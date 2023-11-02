import { CARD_USER_DELETE_ERROR, CARD_USER_DELETE_SUCCESS, CARD_USER_GET_ERROR, CARD_USER_GET_SUCCESS, CARD_USER_POST_ERROR, CARD_USER_POST_SUCCESS,  DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "../../User/Action/Action";
import { CardDeleteUserAxios, CardGetUserAxios, CardPostUserAxios, DeleteUserAxios, GetUserAxios, PostUserAxios } from "../../User/Api/Api";
import { call, put } from "redux-saga/effects"

// get manage handle 
export function* GetManageUser(action) {
  try {
    const res = yield call(GetUserAxios, action)
    const data = res.data;
    const status = res.status; 
    if (status === 200) {
      yield put({ type: GET_USER_SUCCESS, data })
    } else {
      yield put({ type: GET_USER_ERROR, data })
    }
  } catch (error) {
    yield put({ type: GET_USER_ERROR, error })
  }
}

// post manage handle 

export function* PostManageUser(action) {
  try {
    const res = yield call(PostUserAxios, action)
    const data = res.data;
    const status = res.status; 
    if (status === 201) {
      yield put({ type: POST_USER_SUCCESS, data })
    } else {
      yield put({ type: POST_USER_ERROR, data })
    }
  } catch (error) {
    yield put({ type: POST_USER_ERROR, error })
  }
}

// delete manage handle 

export function* DeleteManageUser(action) {
  try {
    const res = yield call(DeleteUserAxios, action)
    const data = res.data;
    const status = res.status; 
    if (status === 200) {
      yield put({ type: DELETE_USER_SUCCESS, data })
    } else {
      yield put({ type: DELETE_USER_ERROR, data })
    }
  } catch (error) {
    yield put({ type: DELETE_USER_ERROR, error })
  }
}

// Card Post manage handle 

export function* CardPostManageUser(action) {
  try {
    const res = yield call(CardPostUserAxios, action)
    const data = res.data;
    const status = res.status; 
    if (status === 201) {
      yield put({ type: CARD_USER_POST_SUCCESS, data })
    } else {
      yield put({ type: CARD_USER_POST_ERROR, data })
    }
  } catch (error) {
    yield put({ type: CARD_USER_POST_ERROR, error })
  }
}


// Card Get manage handle 

export function* CardGetManageUser(action) {
  try {
    const res = yield call(CardGetUserAxios, action)
    const data = res.data;
    const status = res.status; 
    if (status === 200) {
      yield put({ type: CARD_USER_GET_SUCCESS, data })
    } else {
      yield put({ type: CARD_USER_GET_ERROR, data })
    }
  } catch (error) {
    yield put({ type: CARD_USER_GET_ERROR, error })
  }
}

// card delete manage handle 

export function* CardDeleteManageUser(action) {
  try {
    const res = yield call(CardDeleteUserAxios, action)
    const data = res.data;
    const status = res.status;  
    console.log(action,"ok");
    if (status === 200) {
      yield put({ type: CARD_USER_DELETE_SUCCESS, data })
    } else {
      yield put({ type: CARD_USER_DELETE_ERROR, data })
    }
  } catch (error) {
    yield put({ type: CARD_USER_DELETE_ERROR, error })
  }
}