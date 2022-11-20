import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
  render() {
    console.log('CardList render');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          return <Card monster={monster} />;

          //const { name, email, id } = monster;
          // return (
          //   <div className='card-container' key={id}>
          //     <img
          //       alt={`monster ${name}`}
          //       src={`https://robohash.org/${id}?set=set2&200*200`}
          //     />
          //     <h2>{name}</h2>
          //     <p>{email}</p>
          //   </div>
          // );
        })}
      </div>
    );
  }
}

export default CardList;
