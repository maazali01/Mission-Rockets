import { createAsyncThunk } from '@reduxjs/toolkit';

export const Rockets = createAsyncThunk(
  '/Rockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
}
);

export const Missions = createAsyncThunk(
    '/Missions',
    async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
    }
  );
