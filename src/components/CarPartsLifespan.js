import React, { useState } from 'react';
import '../App.css';
import HeroSection from './HeroSection';


const CarPartsLifespan = () => {
  const [mileage, setMileage] = useState(0);
  const [drivingTerrain, setDrivingTerrain] = useState('City');
  const [brakeStatus, setBrakeStatus] = useState('Good');
  const [engineOilStatus, setEngineOilStatus] = useState('Good');
  const [airFilterStatus, setAirFilterStatus] = useState('Good');

  const calculateLifespan = () => {
    const mileageFactor = {
      City: 1,
      Highway: 1.2,
      Offroad: 1.5,
    };

    const brakeLife = 40000 / (mileageFactor[drivingTerrain] * mileage);
    const engineOilLife = 10000 / (mileageFactor[drivingTerrain] * mileage);
    const airFilterLife = 10000 / (mileageFactor[drivingTerrain] * mileage);

    setBrakeStatus(determineStatus(brakeLife, 40000));
    setEngineOilStatus(determineStatus(engineOilLife, 10000));
    setAirFilterStatus(determineStatus(airFilterLife, 10000));
  };

  const determineStatus = (currentLife, totalLife) => {
    if (currentLife <= 0) {
      return 'Need Servicing';
    } else if (currentLife / totalLife < 0.25) {
      return 'Close to Run Out';
    } else {
      return 'Good';
    }
  };

  return (
    <div className="container">
      <h1>Car Parts Lifespan Calculator</h1>

      <div className="inputs">
        <label>Mileage:</label>
        <input type="number" value={mileage} onChange={(event) => setMileage(event.target.value)} />

        <label>Driving Terrain:</label>
        <select value={drivingTerrain} onChange={(event) => setDrivingTerrain(event.target.value)}>
          <option value="City">City</option>
          <option value="Highway">Highway</option>
          <option value="Offroad">Offroad</option>
        </select>

        <button onClick={calculateLifespan}>Calculate Lifespan</button>
      </div>

      <div className="results">
        <h3>Brake Status: {brakeStatus}</h3>
        <h3>Engine Oil Status: {engineOilStatus}</h3>
        <h3>Air Filter Status: {airFilterStatus}</h3>
      </div>
    </div>
  );
};

export default CarPartsLifespan;
