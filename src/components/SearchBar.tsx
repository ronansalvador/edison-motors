import React, { useContext } from 'react';
import EdisonContext from '../context/EdisonContext';
import './SearchBar.css';

export default function SearchBar() {
  const { setCoin } = useContext(EdisonContext);
  
  const convertCoin = async (crypto: string) => {
    const url = `https://api.coingecko.com/api/v3/coins/${crypto}`;
    const response = await fetch(url);
    const infoCoin = await response.json();
    const infoCoinPersonality = [infoCoin.symbol, infoCoin.market_data.current_price.brl];
    setCoin(infoCoinPersonality);
  }
  const   cleanCoins = async () => {
    const infoCoinPersonality = ['R$', 1];
    setCoin(infoCoinPersonality);
  };

  return (
    <div className="coin-btns">
        <button
          onClick={ () => convertCoin('bitcoin') }
          type="button"
        >
          Bitcoin
        </button>
        <button
          onClick={ () => convertCoin('ethereum') }
          type="button"
        >
          Ethereum
        </button>
        <button
          onClick={ () => convertCoin('klever') }
          type="button"
        >
          Klever
        </button>
        <button
          onClick={ () => cleanCoins() }
          type="button"
        >
          BRL
        </button>
      </div>
  )
}
