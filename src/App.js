import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import SpaceXRockets from './components/displayRockets';
import SpaceXMissions from './components/displayMissions';
import Profile from './components/myprofile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class = "container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Missions" element={(<SpaceXMissions />)} />
            <Route path="/Rockets" element={<SpaceXRockets />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
