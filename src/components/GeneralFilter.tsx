import React, {useContext, useEffect} from 'react';
// import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';
import FilterCar from './FilterCar';


export default function GeneralFilter() {
  const {
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
    cars,
    setCatalog,
    setFilterCar,
    resetfilter,
    setFilterModel,
    setFilterFuel,
    setFilterGearshift,
    } = useContext(EdisonContext);

    useEffect(() => {
      handleFilter()
    }, [priceMin, priceMax, yearMin, yearMax, kilometreMin, kilometreMax])

    const clearFilters = () => {
      setCatalog(cars);
      setpriceMin(0);
      setpriceMax(999999);
      setyearMin(0);
      setyearMax(999999);
      setkilometreMin(0);
      setkilometreMax(999999);
      setFilterCar(resetfilter);
      setFilterModel([])
      setFilterFuel([])
      setFilterGearshift([])
    }

  return (
    <div className="general-filter">
        <div className="btns-car-motor">
          <button
            type="button"
            name="option"
            // onClick={ () => {
            //   setState({
            //     car: true,
            //   });
            // } }
          >
            Carros
          </button>
          <button
            type="button"
            name="filtros"
            onClick={() => clearFilters()}
          >
            Limpar Filtros
          </button>
        </div>
        <hr style={ { color: 'white', height: '3px' } } />
        <label htmlFor="price">
          <h6>Preço</h6>
          <div className="filter-general-unit">
            <div>
              <input
                type="number"
                min="1"
                max="250"
                placeholder="de"
                name="priceMin"
                value={ priceMin }
                onChange={ ({ target }) => setpriceMin(target.value) }
              />
              <p>
                ex: 20000
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="de"
                name="priceMax"
                value={ priceMax }
                onChange={ ({ target }) => setpriceMax(target.value) }
              />
              <p>
                ex: 40000
              </p>
            </div>
          </div>
        </label>
        <hr style={ { color: 'white', height: '3px' } } />
        <label htmlFor="year">
          <h6>Ano</h6>
          <div className="filter-general-unit">
            <div>
              <input
                type="number"
                placeholder="2019"
                name="yearMin"
                min={0}
                value={ yearMin }
                onChange={ ({ target }) => setyearMin(target.value) }
              />
              <p>
                ex: 2014
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="2020"
                name="yearMax"
                value={ yearMax }
                onChange={ ({ target }) => setyearMax(target.value) }
              />
              <p>
                ex: 2019
              </p>
            </div>
          </div>
        </label>
        <hr style={ { color: 'white', height: '3px' } } />
        <label htmlFor="kilometre">
          <h6>Quilometragem</h6>
          <div className="filter-general-unit">
            <div>
              <input
                type="number"
                placeholder="de"
                name="kilometreMin"
                value={ kilometreMin }
                onChange={ ({ target }) => setkilometreMin(target.value) }
              />
              <p>
                ex: 10000
              </p>
            </div>
            <div>
              <input
                type="number"
                placeholder="até"
                name="kilometreMax"
                value={ kilometreMax }
                onChange={ ({ target }) => setkilometreMax(target.value) }
              />
              <p>
                ex: 25000
              </p>
            </div>
          </div>
        </label>
        <hr style={ { color: 'white', height: '3px' } } />
        <FilterCar />
      </div>
  )
}
