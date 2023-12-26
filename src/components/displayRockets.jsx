import { fetchRockets } from '../store/slice/rocketsSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SpaceXRockets = () => {
    const dispatch = useDispatch();
    const rockets = useSelector((state) => state.spacex.rockets);
    const status = useSelector((state) => state.spacex.status);
    const error = useSelector((state) => state.spacex.error);
  
    useEffect(() => {
      dispatch(fetchRockets());
    }, [dispatch]);
  
    if (status === 'loading') {
      return <div>Loading...</div>;
    }
  
    if (status === 'failed') {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h2>Rockets</h2>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              <strong>Name:</strong> {rocket.name}, <strong>Country:</strong> {rocket.country}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SpaceXRockets;