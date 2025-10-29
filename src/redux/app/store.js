import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import movieReducer from '../features/movieSlice'


const reducers = combineReducers({
auth : authReducer,
movies : movieReducer

})
export const store = configureStore({
    reducer : reducers,
})

export default store