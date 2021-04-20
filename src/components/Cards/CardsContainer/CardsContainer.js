import React, { Component } from 'react';
import { apiCall } from '../../../api/mockedApi.js';
import { Card } from '../Card/index.js'
import './CardsContainer.css';

export class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
  
  componentDidMount() {
    apiCall().then((data) => {
      this.setState({ cards: data });
    });
  }

  render() {
    const { cards } = this.state;

      if (!cards.length) {
        return (
          <div>No cards yet</div>
        );
      }
      return (
        <div className="card__container">
          { cards.map((card) => <Card key={card.id} cardData={card} />) }
        </div>
      );
  }
}