import { configureStore } from '@reduxjs/toolkit';
import spacexReducer from './spacexSlice';

export const store = configureStore({
  reducer: {
    spacex: spacexReducer,
  },
});

export default store;


