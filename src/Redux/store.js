import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core'
import RootReducer from './RootReducer';
import { composeWithDevTools } from "redux-devtools-extension"
import { SagaIndex } from './Saga';
const SagaMiddleware = createSagaMiddleware()
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
)
SagaMiddleware.run(SagaIndex);
export default store;