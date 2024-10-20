import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Card({item, onDelete}) {
  return (
    <>
      <Popup trigger={
        <div style={cardStyle}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      } modal nested>
        {(close) => (
          <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px", textAlign: "center" }}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Full description:</p>
            <p>{item.fullDescription}</p>
            <button onClick={close} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Закрыть
            </button>
          </div>
        )}
      </Popup>
        <button onClick={() => {onDelete(item.id)}} style={buttonStyle}>
        Удалить
      </button>
    </>
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

const buttonStyle = {
  backgroundColor: '#ff4c4c',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
};