import React, {useContext} from 'react';
// import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';


export default function FilterCar() {
  const {
    catalog,
    cars,
    setCatalog,
    allFuel,
    model,
    allGearshift,
    filterCar,
    setFilterCar

    } = useContext(EdisonContext);

    // const handleChange = useCallback(({ target: { name, checked } }) => {
    //   setCheckbox(prevState => {
    //     return new Map(prevState).set(name, checked);
    //   });
    // }, []);

 

    const handleChecked = async ( event: React.MouseEvent<HTMLInputElement, MouseEvent> ,item:string) => {
    
      const {name, checked} = (event.target as HTMLInputElement)
     console.log(item, name, checked);
    
      setFilterCar((prevState: { filterCar: { [x: string]: { [x: string]: boolean; }; }; }) => ({
        filterCar: {
          ...prevState.filterCar,
          // [name]: { ...prevState.carFilters?.[name],
          // ...prevState.filterCar[name][item] = checked,
  
        } }))
    }

  return (
    <>
        <div>
          Marcas
          {
            model.map((item: string) => (
              <label htmlFor="model" key={ item }>
                <input
                  type="checkbox"
                  name="model"
                  value={ item }
                  checked={ filterCar.model.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
                { item }
              </label>
            ))
          }
        </div>
        <div>
          Combustivel
          {
            allFuel.map((item: string) => (
              <label htmlFor="model" key={ item }>
                <input
                  type="checkbox"
                  name="fuel"
                  value={ item }
                  checked={ filterCar.fuel.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
                { item }
              </label>
            ))
          }
        </div>
        <div>
          Câmbio
          {
            allGearshift.map((item: string) => (
              <label htmlFor="model" key={ item }>
                <input
                  type="checkbox"
                  name="gearshift"
                  value={ item }
                  checked={ filterCar.gearshift?.item }
                  onClick={ (event) => handleChecked(event ,item) }
                />
                { item }
              </label>
            ))
          }
        </div>
      </>
  )
}
