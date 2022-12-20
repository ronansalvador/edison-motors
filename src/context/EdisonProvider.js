import React, { useState } from 'react';
import EdisonContext from './EdisonContext';
import carsJson from '../data/cars.json';

function EdisonProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [coin, setCoin] = useState(['R$', 1]);
  const [ boolean, setBoolean ] = useState(false);
  const [cars, setCars] = useState(carsJson);
  const [catalog, setCatalog] = useState(carsJson);
  const [priceMin, setpriceMin] = useState('');
  const [priceMax, setpriceMax] = useState(999999);
  const [yearMin, setyearMin ]= useState(0);
  const [yearMax, setyearMax] = useState(999999);
  const [kilometreMin, setkilometreMin] = useState(0);
  const [kilometreMax, setkilometreMax] = useState(999999);
  const [model, setmodel] = useState([]);
  const [allFuel] = useState(['Gasolina', 'Álcool', 'Diesel', 'Elétrico'])
  const [allGearshift] = useState(['Manual', 'Automático']);
  const [filterCar, setFilterCar] = useState({
    model: {
      ...model,
    },
    fuel: {
      Gasolina: false,
      Álcool: false,
      Diesel: false,
      Elétrico: false,
    },
    gearshift: {
      Manual: false,
      Automático: false,
    },
  })


  const changeTheme = () => {
    setTheme((curr) => curr === 'light' ? 'dark' : 'light')
  }

  const showSearchBar = () => {
    
    setBoolean(!boolean);
  }

  const handleFilter = async () => {
 

    const result = cars.filter((item) => item.price >= priceMin
    && item.price <= priceMax && Number(item.year) >= yearMin
    && Number(item.year) <= yearMax && item.km >= kilometreMin
    && item.km <= kilometreMax);

    setCatalog(result);
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
    setCars,
    catalog,
    setCatalog,
    priceMin,
    setpriceMin,
    priceMax,
    setpriceMax,
    yearMin,
    setyearMin,
    yearMax,
    setyearMax,
    kilometreMin,
    setkilometreMin,
    kilometreMax,
    setkilometreMax,
    handleFilter,
    allFuel,
    model,
    setmodel,
    allGearshift,
    filterCar,
    setFilterCar
  
  };
  
  return (
    <EdisonContext.Provider
      value={ contextValue }
    >
      {children}
    </EdisonContext.Provider>
  );
}

export default EdisonProvider;

