import {createStore} from 'redux';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;