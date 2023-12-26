import { combineReducers } from 'redux';
import rocketsReducer from './rockets';
import missionsReducer from './missions';

const spacexReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

export default spacexReducer;
