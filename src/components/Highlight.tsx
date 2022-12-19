import React, {useContext} from 'react'
import EdisonContext from '../context/EdisonContext';
import Card from './Card';
import './Highlight.css';

export default function Highlight() {
  const { cars } = useContext(EdisonContext);
  const carsArray = [cars[0], cars[1], cars[4], cars[10]]

  return (
    <section className="highlight">
        <h3>
          Veículos do Momento
        </h3>
        <div className="cards-section">
          {
            carsArray.map((car) => (
              <Card
                key={ car.id }
                car={ car }
              />))
          }
        </div>
      </section>
  )
}
