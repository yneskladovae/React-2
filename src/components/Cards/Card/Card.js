import React from 'react';
import './Card.css';

export function Card({ cardData }) {
  return (
    <div className="card">
      <h2>{cardData.type} {cardData.title}</h2>
      <img src={cardData.imageUrl} alt={cardData.type}></img>
      <h3>Price: {cardData.price}$</h3>
    </div>
  );
}