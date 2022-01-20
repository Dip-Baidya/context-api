import './App.css';
import React, { useState, createContext } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext()

function App() {

  const [category, setCategory] = useState('Laptop')
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <p>Count VAlue: {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
