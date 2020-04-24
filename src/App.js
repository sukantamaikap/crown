import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomrePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatpage/hatpage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      {/* Header will be part of all the pages. Anything that has to be part of all the pages
      has to be be outside switch */}
      <Header />
      <switch>
        <Route exact path='/' component= {HomrePage} />
        <Route exact path='/shop' component = {ShopPage} />
        <Route exact path='/shop/hats' component = {HatsPage} />
      </switch>
    </div>
  );
}

export default App;
