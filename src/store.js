import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(reducer, devToolsEnhancer())
