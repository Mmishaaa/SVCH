import React from "react";
import Card from "./card";
import { Box } from "@mui/material";

function CardsList({ cards, onDelete }) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map((item) => (
        <Card key={item.id} item={item} onDelete={onDelete} />
      ))}
    </Box>
  );
}

export default CardsList;
