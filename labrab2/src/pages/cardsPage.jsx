import { useState, useEffect } from "react";
import data from "../data/data.json";
import CardsList from "../components/cardsList";
import Button from "../components/button";
import { Box } from '@mui/material';

const CardsPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      name: `Item ${cards.length + 1}`,
      description: `Description for Item ${cards.length + 1}`,
    };
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <h1 variant="h1">Card Gallery</h1>
      <Button
        text={"Add Card"}
        onClick={handleAddCard}
        style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      />
      <CardsList cards={cards} onDelete={handleDelete} />
    </Box>
  );
};

export default CardsPage;
