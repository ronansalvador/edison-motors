import React, {useContext, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';
import './FilterCar.css';



export default function FilterCar() {
  const {
    // catalog,
    // cars,
    // setCatalog,
    allFuel,
    model,
    allGearshift,
    filterCar,
    setFilterCar,
    setFilterModel,
    setFilterFuel,
    setFilterGearshift,
    setCatalogFilter,
    filterModel, 
    filterFuel, 
    filterGearshift, 

    } = useContext(EdisonContext);

    // const handleChange = useCallback(({ target: { name, checked } }) => {
    //   setCheckbox(prevState => {
    //     return new Map(prevState).set(name, checked);
    //   });
    // }, []);
  //   useEffect(() => {
  //   const model = filterTrue(filterCar, 'model');
  //   console.log(model);
  //   // setFilterModel(model);
  //   const fuel = filterTrue(filterCar, 'fuel');
  //   const gearshift = filterTrue(filterCar, 'gearshift');

  //  console.log(model, fuel, gearshift);
  //   }, filterCar)

  useEffect(() => {
    setCatalogFilter();
  }, [  filterModel, 
    filterFuel, 
    filterGearshift, filterCar])

  const updateFilterTrue =  () => {
    const model =  filterTrue(filterCar, 'model');
    setFilterModel(model);
    const fuel =  filterTrue(filterCar, 'fuel');
    setFilterFuel(fuel);
    const gearshift = filterTrue(filterCar, 'gearshift');
    setFilterGearshift(gearshift);
  }


    

  const filterTrue = (filters: { [x: string]: { [s: string]: unknown; } | ArrayLike<unknown>; }, array: string) => {
    const model: string[] = [];
    Object.entries(filters[array]).forEach((item) => {
      if (item[1] === true) {
        model.push(item[0]);
      }
    });
    return model;
  }
 

    const handleChecked = async ( event: React.MouseEvent<HTMLInputElement, MouseEvent> ,item:string) => {
    
      const {name, checked} = (event.target as HTMLInputElement)

      const teste = filterCar;
      teste[name][item] = checked;
      // console.log('teste', teste);
      // console.log('filterCar', filterCar);
    
      await setFilterCar(teste);
      updateFilterTrue();
  }

  return (
    <>
        <div className="filter-car">
        <h5>Marcas</h5>
          {
            model.map((item: string) => (
              <div key={ item }>
                <label htmlFor="model">
                  { item }
                </label>
                <input
                  type="checkbox"
                  name="model"
                  value={ item }
                  checked={ filterCar?.model?.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
              </div>
            ))
          }
        </div>
        <hr style={ { color: 'white', height: '3px' } } />
        <div className="filter-car">
          <h5>Combustivel</h5>
          
          {
            allFuel.map((item: string) => (
              <div key={ item }>
                <label htmlFor="model">
                  { item }
                </label>
                <input
                  type="checkbox"
                  name="fuel"
                  value={ item }
                  checked={ filterCar?.fuel?.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
              </div>
            ))
          }
        </div>
        <hr style={ { color: 'white', height: '3px' } } />
        <div className="filter-car">
          <h5>Câmbio</h5>
          {
            allGearshift.map((item: string) => (
              <div key={ item }>
                <label htmlFor="model">
                  { item }
                </label>
                <input
                  type="checkbox"
                  name="gearshift"
                  value={ item }
                  checked={ filterCar?.gearshift?.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
              </div>
            ))
          }
        </div>
      </>
  )
}
