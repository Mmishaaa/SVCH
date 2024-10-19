import { Component } from "react";
import cardsData from "../../constants/cardsData";
import Card from "../card/card";

class CardsList extends Component {
  render() {
    return(
      <section>
        <h2 style={{textAlign: 'center'}}>Cards List</h2>
        {cardsData.map(card => (
          <Card key={card.id} title={card.title} content={card.content} />
        ))}
      </section>
    )
  }
}

export default CardsList;