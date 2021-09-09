import {combineReducers} from 'redux';
import characterReducer from './features/character';

const rootReducer = combineReducers({
    character: characterReducer
})

export default rootReducer;