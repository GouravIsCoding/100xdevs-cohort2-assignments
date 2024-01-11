import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getAllCards } from '../backend.js';
export default function Home(props) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getAllCards().then(data => {
      console.log(data.data);
      setCards(data.data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {cards.map(card => (
          <div key={card._id}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </>
  );
}
