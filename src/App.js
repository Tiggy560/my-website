import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import StartupJourney from './startupjourney';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/startup-journey" element={<StartupJourney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;