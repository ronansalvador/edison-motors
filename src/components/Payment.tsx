import React, {useContext } from 'react';
import { useParams } from 'react-router-dom';
import EdisonContext from '../context/EdisonContext';
import './Payment.css';
import cryptoImg from '../assets/images/klever.png';
import cc from '../assets/images/cc.png';
import pix from '../assets/images/pix.png';
import BtnPayment from './BtnPayment';

export default function Payment() {
  const {
    cars,
    coin
    } = useContext(EdisonContext);
  console.log(cars)
  const { id } = useParams();
  console.log(id)
  const [vehicle] = cars.filter((vehicle: { id: number; }) => vehicle.id === Number(id));
  console.log(vehicle);
  const fuel = vehicle.fuel
  return (
    <div className="payment-page">
        <section>

          <div className="payment-info-car">
            <h2>Você está comprando</h2>
          </div>
          <div className="payment-info-car">
            <img className="imgVeiculo" src={ vehicle.img } alt={ vehicle.name } />
            <section className="caractVeiculo">
              <h3>{ vehicle.name }</h3>
              <h4>Caracteristicas do veiculo:</h4>
              <br />
              <br />
              <p>{ vehicle.model }</p>
              <p>{ vehicle.year }</p>
              <p>{ fuel }</p>
            </section>
          </div>
        </section>
        <aside>
          <div>
            <h5>Produto</h5>
            <h2 className="h2-name">{ vehicle.name }</h2>
          </div>
          <div>
            <h3>Você Pagará</h3>
            <h2>
              {
                `${coin[0]} ${(Number(vehicle.price) / Number(coin[1])).toFixed(2)}`
              }
            </h2>
          </div>
          <div>
            <h5>Pagar com</h5>
            <section className="btns-payment">
              <BtnPayment name="Crypto" image={ cryptoImg } />
              <BtnPayment name="Cartão de Crédito " image={ cc } />
              <BtnPayment name="Pix" image={ pix } />
            </section>
          </div>
        </aside>
      </div>
  )
}
