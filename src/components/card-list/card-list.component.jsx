import { Component } from 'react';

class CardList extends Component {
  render() {
    console.log('CardList render');
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          // <h1 key={monster.id}>{monster.name}</h1>
          const { name, email, id } = monster;
          return (
            <div className='card-container' key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&200*200`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
