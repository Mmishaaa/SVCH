import { Component } from "react";
import CardsList from "../cardsList/cardsList";

class Content extends Component {
  render() {
    return (
      <section style={{ padding: '20px', backgroundColor: '#f4f4f4', marginBottom: '20px' }}>
        <CardsList></CardsList>
      </section>
    );
  }
}

export default Content;