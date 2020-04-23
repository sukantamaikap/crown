import React from 'react';
import './App.css';
import HomrePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatpage/hatpage.component';
import ShopPage from './pages/shop/shop.component';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component= {HomrePage} />
        <Route exact path='/shop' component = {ShopPage} />
        <Route exact path='/shop/hats' component = {HatsPage} />
      </switch>
    </div>
  );
}

export default App;
