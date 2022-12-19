import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import EdisonContext from '../context/EdisonContext';
import SearchBar from './SearchBar';
import './Header.css';

export default function Header() {
  const { coin, boolean, showSearchBar } = useContext(EdisonContext);
  const history = useNavigate();

  useEffect(() => {
    localStorage.setItem('infoCoin', JSON.stringify(coin));
  });

  return (
    <>
      <header className="header">
          <div>
            <a href="/">
              <h2>Edison</h2>
              <h2>Motors</h2>
            </a>
          </div>
          <nav className="end-nav">
            <ul>
              <button
                onClick={ () => showSearchBar() }
                type="button"
              >
                CONVERTER MOEDA
              </button>
              <button
                onClick={ () => history('/login') }
                type="button"
              >
                LOGIN
              </button>
            </ul>
          </nav>
        </header>
        { boolean && <SearchBar /> }
    </>
  )
}
