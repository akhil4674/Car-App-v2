import React, { useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  background-color: ${(props) =>
    props.progress >= 20 ? '#00FF00' : '#FF0000'};
  width: ${(props) => props.progress}%;
`;

const PartLife = () => {
  const [carWeight, setCarWeight] = useState(0);
  const [drivingTerrain, setDrivingTerrain] = useState('');
  const [partLife, setPartLife] = useState({
    airFilter: 0,
    engineOil: 0,
    brakePads: 0,
  });

  const calculatePartLife = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let airFilterLife = 15000;
    let engineOilLife = 5000;
    let brakePadsLife = 30000;

    if (drivingTerrain === 'Offroad') {
      airFilterLife *= 0.75;
      engineOilLife *= 0.6;
      brakePadsLife *= 0.5;
    } else if (drivingTerrain === 'Mixed') {
      airFilterLife *= 0.85;
      engineOilLife *= 0.7;
      brakePadsLife *= 0.6;
    }

    if (carWeight > 2000) {
      airFilterLife *= 0.9;
      engineOilLife *= 0.8;
      brakePadsLife *= 0.7;
    }

    // Update the state with the calculated values
    setPartLife({
      airFilter: airFilterLife,
      engineOil: engineOilLife,
      brakePads: brakePadsLife,
    });

    // Reset input values to 0
    setCarWeight(0);
    setDrivingTerrain('');
  };

  const render = () => {
    return (
      <div className="PartLife">
        <header>
          <h1>Car Spare Part Life Calculator</h1>
        </header>
        <main>
          <div className="user-input" style={{ padding: '10px' }}>
            <h2>User Input</h2>
            <form onSubmit={calculatePartLife}>
              <label>Car Weight (kg):</label>
              <input
                type="number"
                value={carWeight}
                onChange={(event) => setCarWeight(event.target.value)}
              />
              <br />

              <label>Driving Terrain:</label>
              <select
                value={drivingTerrain}
                onChange={(event) => setDrivingTerrain(event.target.value)}
              >
                <option value="">Select Terrain</option>
                <option value="Highway">Highway</option>
                <option value="City">City</option>
                <option value="Mixed">Mixed</option>
                <option value="Offroad">Offroad</option>
              </select>
              <br />

              <button type="submit">Calculate Part Life</button>
            </form>
          </div>

          <div className="results" style={{ padding: '10px' }}>
            <h2>Estimated Part Life</h2>
            <ul>
              <li>
                Air Filter: {partLife.airFilter.toFixed(2)} km
                <ProgressBar progress={(partLife.airFilter / 15000) * 100} />
              </li>

              <li>
                Engine Oil: {partLife.engineOil.toFixed(2)} km
                <ProgressBar progress={(partLife.engineOil / 5000) * 100} />
              </li>

              <li>
                Brake Pads: {partLife.brakePads.toFixed(2)} km
                <ProgressBar progress={(partLife.brakePads / 30000) * 100} />
              </li>
            </ul>
          </div>
        </main>
        <footer>
          <p>&copy; 2023 Car Spare Part Life Calculator</p>
        </footer>
      </div>
    );
  };

  return render();
};

export default PartLife;
