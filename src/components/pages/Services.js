import React, { useState } from "react";
import "/Users/akhilkumar/Desktop/Py/car_app/src/PartLife.css";

export default function Services() {
  const [formData, setFormData] = useState({
    mileage: '',
    temperature: '',
    driving_style: '',
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
      setResult(null);
    }
  };

  return (
    <div className='services'>
      <h1>Services</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mileage:</label>
          <input
            type="number"
            name="mileage"
            value={formData.mileage}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Temperature:</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Driving Style:</label>
          <select
            name="driving_style"
            value={formData.driving_style}
            onChange={handleInputChange}
            required
          >
            <option value="">Select one</option>
            <option value="aggressive">Aggressive</option>
            <option value="moderate">Moderate</option>
            <option value="conservative">Conservative</option>
          </select>
        </div>
        <button type="submit">Predict</button>
      </form>

      {result && (
        <div>
          <h2>Prediction Results:</h2>
          <p>Brake Pads Life KM: {result['Brake Pads Life KM']}</p>
          <p>Engine Oil Life KM: {result['Engine Oil Life KM']}</p>
          <p>Oil Filter Life KM: {result['Oil Filter Life KM']}</p>
        </div>
      )}

      {error && (
        <div>
          <h2>An error occurred:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
