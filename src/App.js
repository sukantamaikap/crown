import React from 'react';
import './App.css';
import HomrePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatpage/hatpage.component';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component= {HomrePage} />
        <Route path='/shop/hats' component = {HatsPage} />
      </switch>
    </div>
  );
}

export default App;
