import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Snickers from './Snickers';

import './App.css';
import NoItem from './NoItem';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<VendingMachine />} >
          <Route index element={<NoItem />} />
          <Route path='soda' element={<Soda />} />
          <Route path='chips' element={<Chips />} />
          <Route path='snickers' element={<Snickers />} />
        </Route>
      </Routes>

      <Outlet />

      <Navbar />
    </div>
  );
}


export default App;