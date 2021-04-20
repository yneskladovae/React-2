import React from 'react';
import { CardsContainer } from '../Cards/CardsContainer/index.js';

export default function Main(props) {
  const avatar = props.avatar;
  return (
    <main>
      <img src={avatar.image} alt={avatar.alt} />
      <CardsContainer />
    </main>
  );
}