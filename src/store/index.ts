import { userReducer } from './reducers/userReducer';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

export const store = createStore(userReducer, applyMiddleware(thunk))