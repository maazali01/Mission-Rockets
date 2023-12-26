import { combineReducers } from 'redux';
import rocketsReducer from './rocketsSlice';
import missionsReducer from './missionsSlice';

const spacexReducer = combineReducers({
    rockets: rocketsReducer,
    missions: missionsReducer,
});

export default spacexReducer;
