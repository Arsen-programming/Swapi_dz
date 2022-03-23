import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from "../people-page";

const App = () => {
  const [showRandomPlanet, setShowRandomPlanet] = useState(true);
  const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

  return (
    <div>
      <Header />
      {randomPlanet}
      <PeoplePage />
    </div>
  );
};

export default App;
