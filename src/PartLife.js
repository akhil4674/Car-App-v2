import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for progress bars
const ProgressBarContainer = styled.div`
  background-color: #e0e0de;
  border-radius: 2px;
  margin: 5px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) =>
    props.progress >= 20 ? '#00FF00' : '#FF0000'};
  width: ${(props) => props.progress}%;
  padding: 5px;
  border-radius: 2px;
  transition: width 0.5s ease-in-out;
`;

const PartLife = () => {
  const [mileage, setMileage] = useState('');
  const [temperature, setTemperature] = useState('');
  const [drivingStyle, setDrivingStyle] = useState('');
  const [partLife, setPartLife] = useState({
    airFilter: 0,
    engineOil: 0,
    brakePads: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mileage: parseFloat(mileage),
          temperature: parseFloat(temperature),
          driving_style: drivingStyle,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPartLife({
        airFilter: data['Air Filter Life KM'], // Adjust the keys based on your actual Flask API response
        engineOil: data['Engine Oil Life KM'],
        brakePads: data['Brake Pads Life KM'],
      });
    } catch (error) {
      console.error("There was an error with the prediction:", error);
    }
  };

  return (
    <div className="PartLife">
      <h1>Car Part Life Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mileage:
          <input
            type="number"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            placeholder="Enter car mileage"
          />
        </label>
        <label>
          Temperature:
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter current temperature"
          />
        </label>
        <label>
          Driving Style:
          <select
            value={drivingStyle}
            onChange={(e) => setDrivingStyle(e.target.value)}
          >
            <option value="">Select Driving Style</option>
            <option value="aggressive">Aggressive</option>
            <option value="moderate">Moderate</option>
            <option value="conservative">Conservative</option>
          </select>
        </label>
        <button type="submit">Predict Part Life</button>
      </form>
      <div>
        <h2>Estimated Part Life</h2>
        <div>
          Air Filter Life: {partLife.airFilter} km
          <ProgressBarContainer>
            <ProgressBar progress={(partLife.airFilter / 15000) * 100} />
          </ProgressBarContainer>
        </div>
        <div>
          Engine Oil Life: {partLife.engineOil} km
          <ProgressBarContainer>
            <ProgressBar progress={(partLife.engineOil / 5000) * 100} />
          </ProgressBarContainer>
        </div>
        <div>
          Brake Pads Life: {partLife.brakePads} km
          <ProgressBarContainer>
            <ProgressBar progress={(partLife.brakePads / 30000) * 100} />
          </ProgressBarContainer>
        </div>
      </div>
    </div>
  );
};

export default PartLife;
