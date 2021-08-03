import React from 'react';
import { Card } from '../card/card.component';
import './card-list-component.css';

export const CardList = props => {
  const { monsters } = props;
  console.log(props);
  return (
    <div className="card-list">
      {
        monsters.map(monster => {
          return (
            <div key={monster.id}>
              <Card monster={monster}></Card>
            </div>
          )
        })
      }
    </div>
  )
}