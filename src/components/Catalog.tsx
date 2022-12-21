import React, {useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';
import Icar from '../interface';
import './Catalog.css';
import GeneralFilter from './GeneralFilter';

export default function Catalog() {
  const { coin, catalog, handleFilter, priceMin,
    priceMax,
    yearMin,
    yearMax,
    kilometreMin,
    kilometreMax, } = useContext(EdisonContext);
  const history = useNavigate();
  
  useEffect(() => {
    handleFilter();
  }, [priceMin, 
    priceMax,
    yearMin,
    yearMax,
    kilometreMin,
    kilometreMax, ])

  return (
    <main className="container-catalog">
        <h3>
          MODELOS DISPONÍVEIS
        </h3>
        <section>
          <div className="filters-catalog">
            <GeneralFilter />
          </div>
          <article className="results-filters-catalog">
            {
              catalog.length > 0 ? catalog.map((item: Icar["car"], index: number) => (
                <button
                  type="button"
                  className="result-filter"
                  key={ index }
                  onClick={ () => history(`/${item.id}`) }
                >
                  <div className='result-filter-image'>
                    <img src={ item.img } className="result-filter" />
                  </div>
                  <div>
                    <h4>{ item.name }</h4>
                    <ul>
                      <li>{`${item.model} - ${item.year}`}</li>
                    </ul>
                  </div>
                  <h3>
                    { `${coin[0]} ${(item.price / coin[1]).toFixed(2)}` }
                  </h3>
                </button>
              ))
                : <div>
                    <p>Nenhum veículo encontrado limpe os filtros e redefina sua pesquisa</p>
                  </div>
                  
            }
          </article>
        </section>
      </main>
  )
}
