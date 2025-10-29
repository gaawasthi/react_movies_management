import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice'
import movieReducer from '../features/movieSlice'

import themereducer from '../features/themeSlice'
const reducers = combineReducers({
auth : authReducer,
movies : movieReducer,
theme: themereducer

})
export const store = configureStore({
    reducer : reducers,
})

export default store