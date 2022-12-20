import React from 'react';
import Catalog from '../components/Catalog';
import Header from '../components/Header';
import Highlight from '../components/Highlight';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Highlight />
      <Catalog />
    </>

  )
}
