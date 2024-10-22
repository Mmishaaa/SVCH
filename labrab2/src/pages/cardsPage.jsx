import { useState, useEffect } from "react";
import data from "../data/data.json";
import CardsList from "../components/cardsList";
import { Button, Typography, TextField } from "@mui/material";
import Popup from "reactjs-popup";
import { Box } from '@mui/material';
import 'reactjs-popup/dist/index.css';

const CardsPage = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({ name: "", description: "", fullDescription: "" });

  useEffect(() => {
    setCards(data);
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleAddCard = () => {
    if (newCard.name && newCard.description && newCard.fullDescription) {
      const cardToAdd = {
        id: cards.length + 1,
        name: newCard.name,
        description: newCard.description,
        fullDescription: newCard.fullDescription,
      };
      setCards((prevCards) => [...prevCards, cardToAdd]);
      setNewCard({ name: "", description: "" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography
        variant="h1"
        sx={{ fontSize: '32px', marginBottom: '20px' }}
      >
        Card Gallery
      </Typography>
      <Popup trigger={
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: '20px', padding: '10px' }}
        >
          Add Card
        </Button>
      } modal>
        {close => (
          <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
              Add New Card
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Card Name"
              type="text"
              fullWidth
              variant="outlined"
              value={newCard.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="description"
              label="Card Description"
              type="text"
              fullWidth
              variant="outlined"
              value={newCard.description}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="fullDescription"
              label="Card full Description"
              type="text"
              fullWidth
              variant="outlined"
              value={newCard.fullDescription}
              onChange={handleInputChange}
            />
            <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={close} color="primary">
                Cancel
              </Button>
              <Button onClick={() => { handleAddCard(); close(); }} color="primary">
                Add
              </Button>
            </Box>
          </Box>
        )}
      </Popup>

      <CardsList cards={cards} onDelete={handleDelete} />
    </Box>
  );
};

export default CardsPage;
