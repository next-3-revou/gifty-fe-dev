import { combineReducers, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token'
import userReducer from './userId';

export const store = configureStore({
	reducer: combineReducers({
		tokens: tokenReducer,
		users: userReducer
	}),
});

export default store
