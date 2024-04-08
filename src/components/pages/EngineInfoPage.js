import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const EngineCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  text-align: center;
`;

const EngineImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const engines = [
  {
    name: 'V6 Engine',
    description: 'A balanced and compact six-cylinder engine.',
    imageUrl: '/images/v6-engine.jpg', // Replace with your actual image path
  },
  {
    name: 'V8 Engine',
    description: 'Powerful eight-cylinder engine for high-performance vehicles.',
    imageUrl: '/images/v8-engine.jpg',
  },
  // ... more engines
];

const EngineInfoPage = () => {
  return (
    <Container>
      <h1>Learn About Different Engine Types</h1>
      {engines.map((engine) => (
        <EngineCard key={engine.name}>
          <h2>{engine.name}</h2>
          <EngineImage src={engine.imageUrl} alt={engine.name} />
          <p>{engine.description}</p>
        </EngineCard>
      ))}
    </Container>
  );
};

export default EngineInfoPage;
