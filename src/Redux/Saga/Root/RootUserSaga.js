import { takeLatest } from "redux-saga/effects"
import { CardDeleteManageUser, CardGetManageUser,  CardPostManageUser, DeleteManageUser, GetManageUser, PostManageUser } from "../ManageUser/ManageUser"
import { CARD_USER_DELETE_PROGRESS, CARD_USER_GET_PROGRESS, CARD_USER_POST_PROGRESS, DELETE_USER_PROGRESS, GET_USER_PROGRESS, POST_USER_PROGRESS } from "../../User/Action/Action"
// Get Api Action Base Working Function
export function* GetRootSaga(){
  yield takeLatest( GET_USER_PROGRESS , GetManageUser )
}
// Post Api Action Base Working Function
export function* PostRootSaga(){
  yield takeLatest( POST_USER_PROGRESS , PostManageUser )
}
// Delete Api Action Base Working Function
export function* DeleteRootSaga(){
  yield takeLatest( DELETE_USER_PROGRESS , DeleteManageUser )
}
// Card Api Post Action Base Working Function
export function* CardPostRootSaga(){
  yield takeLatest( CARD_USER_POST_PROGRESS , CardPostManageUser )
}
// Card Api Get Action Base Working Function
export function* CardGetRootSaga(){
  yield takeLatest( CARD_USER_GET_PROGRESS , CardGetManageUser )
}
// Card Api Get Action Base Working Function
export function* CardDeleteRootSaga(){
  yield takeLatest( CARD_USER_DELETE_PROGRESS , CardDeleteManageUser )
}