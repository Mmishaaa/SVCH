import { Component } from "react";

class InfoCard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', margin: '20px auto', width: '80%'}}>
        <h3>Info Card</h3>
        <p>This is some information in a card.</p>
      </div>
    );
  }
}

export default InfoCard;