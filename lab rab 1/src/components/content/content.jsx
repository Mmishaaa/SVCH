import { Component } from "react";
import CardsList from "../cardsList/cardsList";

class Content extends Component {
  render() {
    return (
      <section style={{ padding: '20px', backgroundColor: '#f4f4f4'}}>
        <CardsList></CardsList>
      </section>
    );
  }
}

export default Content;