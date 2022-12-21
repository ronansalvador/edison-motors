import React from 'react'
import { useNavigate } from "react-router-dom";
import Icar from '../interface';
import './Card.css';


export default function Card( props : Icar ) {
  const history = useNavigate();
  const {car} = props
  return (
    <article className="card">
        <div className='card-image'>
          <img src={ car.img } alt={ car.name } />
        </div>
        <div className="car-description">
          <h4>{ car.name }</h4>
          <ul className="car-info">
            <li>{ car.model }</li>
            -
            <li>{ car.year }</li>
          </ul>
          <div className="buttons-section">
            <button
              type="button"
              onClick={ () => history(`/${car.id}`) }
            >
              <p>
                Saiba mais
              </p>
            </button>
            <button
              type="button"
              onClick={ () => history(`/payment/${car.id}`) }
            >
              Tenho interesse
            </button>
          </div>
        </div>
      </article>
  )
}
