import { combineReducers, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token'

export const store = configureStore({
	reducer: combineReducers({
		tokens: tokenReducer,
	}),
});

export default store
