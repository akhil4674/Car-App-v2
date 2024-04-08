import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import PartLife from './PartLife';
import EngineInfoPage from './components/pages/EngineInfoPage'; 
import './App.css';

// If you need to use navigate in one of your components, include useNavigate there
// import { useNavigate } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/part-life' component={PartLife} />
        <Route path='/engines' component={Products} />
      </Switch>
    </Router>
  );
}

export default App;