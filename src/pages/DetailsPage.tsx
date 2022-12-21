import React, {useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';
import './DetailsPage.css';

export default function DetailsPage() {
  const {
    cars,
    coin
    } = useContext(EdisonContext);
  const history = useNavigate();
  console.log(cars)
  const { id } = useParams();
  console.log(id)
  const [vehicle] = cars.filter((vehicle: { id: number; }) => vehicle.id === Number(id));
  console.log(vehicle);
  const fuel = vehicle.fuel
 

  return (
    <div className="details-page">
        <Header />
        <div className="hero" style={ { backgroundImage: `url(${vehicle.img})` } } />
        <section className="car-details">
          <h2>{vehicle.name}</h2>
          <div className="column">
            <div className="info">
              <p>Marca</p>
              <h4>{vehicle.model}</h4>
            </div>
            <div className="info">
              <p>Ano</p>
              <h4>{vehicle.year}</h4>
            </div>
            <div className="info">
              <p>Combustivel</p>
              <h4>{fuel}</h4>
            </div>
          </div>
          <div className="column">
            <div className="info">
              <p>Câmbio</p>
              <h4>{vehicle.gearshift}</h4>
            </div>
            <div className="info">
              <p>Preço</p>
              <h4>
                {
                  `${coin[0]} ${(Number(vehicle.price) / Number(coin[1])).toFixed(2)}`
                }
              </h4>
            </div>
            <div className="info">
              <p>Potência</p>
              <h4>{vehicle.power}</h4>
            </div>
          </div>
          <div className="column">
            <div className="info">
              <p>Velocidade máxima</p>
              <h4>{vehicle.maximum_speed}</h4>
            </div>
            <div className="info">
              <p>Kilometros rodados</p>
              <h4>{vehicle.km}</h4>
            </div>
          </div>
        </section>
        <section className="car-accessories">
          <h3>Opcionais</h3>
          <div className="accessories">
            {
              vehicle.airbag ? <h4>Airbag</h4> : <> </>
            }
            {
              vehicle.alarm ? <h4>Alarme</h4> : <> </>
            }
            {
              vehicle.air_conditioning ? <h4>Ar condicionado</h4> : <> </>
            }
          </div>
        </section>
        <button
          className="buy-button"
          type="button"
          onClick={ () => history(`/payment/${id}`) }
        >
          Comprar
        </button>
        <Footer />
      </div>
  )
}
