import { useState, useEffect } from "react";
import data from "../data/data.json";
import CardsList from "../components/cardsList";
import { Button } from "@mui/material";
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
      <h1>Card Gallery</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddCard}
        sx={{ marginBottom: '20px', padding: '10px' }}
      >
        Add Card
      </Button>
      <CardsList cards={cards} onDelete={handleDelete} />
    </Box>
  );
};

export default CardsPage;
