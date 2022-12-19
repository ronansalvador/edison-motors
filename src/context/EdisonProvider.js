import React, { useState } from 'react';
import EdisonContext from './EdisonContext';
import carsJson from '../data/cars.json';

function EdisonProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [coin, setCoin] = useState({coin: ['R$', 1]});
  const [ boolean, setBoolean ] = useState(false);
  const [cars, setCars] = useState(carsJson);

  const changeTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }

  const showSearchBar = () => {
    
    setBoolean(!boolean);
  }

  const contextValue = { 
    theme,
    changeTheme,
    coin,
    setCoin,
    boolean,
    setBoolean,
    showSearchBar,
    cars,
    setCars };
  
  return (
    <EdisonContext.Provider
      value={ contextValue }
    >
      {children}
    </EdisonContext.Provider>
  );
}

export default EdisonProvider;

