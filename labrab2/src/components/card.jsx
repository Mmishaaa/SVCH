import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Button, Box } from "@mui/material";

function Card({ item, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Popup
        trigger={
          <Box sx={cardStyle}>
            <h3>{editedItem.name}</h3>
            <p>{editedItem.description}</p>
          </Box>
        }
        modal
        nested
        contentStyle={popupContentStyle}
        overlayStyle={overlayStyle}
        closeOnDocumentClick={true}
      >
        {(close) => (
          <Box sx={popupStyle}>
            {!isEditing ? (
              <>
                <h2>{editedItem.name}</h2>
                <p>{editedItem.description}</p>
                <p>Full description:</p>
                <p>{editedItem.fullDescription}</p>
              </>
            ) : (
              <Box>
                <input
                  type="text"
                  name="name"
                  value={editedItem.name}
                  onChange={handleEditChange}
                  style={inputStyle}
                />
                <textarea
                  name="description"
                  value={editedItem.description}
                  onChange={handleEditChange}
                  style={textareaStyle}
                />
                <textarea
                  name="fullDescription"
                  value={editedItem.fullDescription}
                  onChange={handleEditChange}
                  style={textareaStyle}
                />
              </Box>
            )}
            <Box sx={{ marginTop: "20px" }}>
              {!isEditing ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsEditing(true)}
                    sx={muiButtonStyle}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      onDelete(item.id);
                      close();
                    }}
                    sx={muiButtonStyle}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleSave}
                    sx={muiButtonStyle}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setIsEditing(false)}
                    sx={muiButtonStyle}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={close}
              sx={{ marginTop: "10px" }}
            >
              Close
            </Button>
          </Box>
        )}
      </Popup>
    </>
  );
}

export default Card;

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "10px",
  margin: "10px",
  textAlign: "center",
  width: "200px",
  position: "relative",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const popupStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  textAlign: "center",
  width: "100%",
};

const popupContentStyle = {
  borderRadius: "10px",
  padding: "20px",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease-in-out",
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const muiButtonStyle = {
  marginRight: "10px",
  marginTop: "10px",
};
