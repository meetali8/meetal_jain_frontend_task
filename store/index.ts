import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import leadsReducer from './reducers/leadsReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  leads: leadsReducer,
});

export const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
