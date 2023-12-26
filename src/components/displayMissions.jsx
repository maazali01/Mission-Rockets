import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../store/slice/missionsSlice';

const SpaceXMissions = () => {
    const dispatch = useDispatch();
    const missions = useSelector((state) => state.spacex.missions);
    const status = useSelector((state) => state.spacex.status);
    const error = useSelector((state) => state.spacex.error);
  
    useEffect(() => {
      dispatch(fetchMissions());
    }, [dispatch]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h2>Missions</h2>
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id}>
              <strong>Name:</strong> {mission.mission_name}, <strong>Details:</strong> {mission.details}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SpaceXMissions;