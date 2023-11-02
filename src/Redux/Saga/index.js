import { all } from "redux-saga/effects";
import { CardDeleteRootSaga, CardGetRootSaga, CardPostRootSaga, DeleteRootSaga, GetRootSaga, PostRootSaga } from "./Root/RootUserSaga";

export function* SagaIndex() {
  // all RootSaga Function Call in one Line ,
  yield all([
    // main api crd
    GetRootSaga(),
    PostRootSaga(),
    DeleteRootSaga(),
    //card mathods 
    CardPostRootSaga(),
    CardGetRootSaga(),
    CardDeleteRootSaga(),
    
  ])
}