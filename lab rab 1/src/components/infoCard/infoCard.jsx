import { Component } from "react";
import Button from "../button/button";

class InfoCard extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '15px', margin: '20px auto', width: '80%'}}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <Button></Button>
      </div>
    );
  }
}

export default InfoCard;