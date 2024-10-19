import { Component } from "react";
import cardsData from "../../constants/cardsData";
import InfoCard from "../infoCard/infoCard";

class CardsList extends Component {
  render() {
    return(
      <section>
        <h2>Info Cards List</h2>
        {cardsData.map(card => (
          <InfoCard key={card.id} title={card.title} content={card.content} />
        ))}
      </section>
    )
  }
}

export default CardsList;