import { combineReducers } from 'redux'
import UserReducer from './User/Reducer/Reducer'
const RootReducer = combineReducers({
  UserReducer,
})
export default RootReducer