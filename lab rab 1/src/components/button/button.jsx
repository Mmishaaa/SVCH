import { Component } from "react";

class Button extends Component {
  render() {
    const buttonStyle = {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '1em',
      marginBottom: '20px'
    };

    return (
      <button
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#45a049'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#4CAF50'}
      >
        Update
      </button>
    );
  }
}

export default Button;