import React, { useEffect, useState } from 'react';
import { getCard } from '../backend';
import { useParams } from 'react-router-dom';
import Form from '../components/Form';
export default function EditCard() {
  const [card, setCard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const card = await getCard(id);
      setCard(card.data);
    })();
  }, []);

  return (
    <>
      <Form passedCard={card} />
    </>
  );
}
