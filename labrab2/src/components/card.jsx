import React from "react";

function Card({item, onDelete}) {
  return (
    <div style={cardStyle}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={() => onDelete(item.id)} style={buttonStyle}>
        Delete
      </button>
    </div>
  )
}

export default Card;

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  width: '200px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#ff4c4c',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
};